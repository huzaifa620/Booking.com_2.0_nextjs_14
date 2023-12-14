'use client'

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { products, callsToAction, options } from "@/constants"

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-booking ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 bg-white">
                        <span className="sr-only">Booking.com</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/220px-Booking.com_logo.svg.png" alt="" className="h-12 w-auto" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">

                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                            Stays
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        </Popover.Button>

                        <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {
                                        products.map((item) => (
                                            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                                
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                                                    <item.icon className="h-6 w-6 text-booking group-hover:text-blue-600" aria-hidden="true" />
                                                </div>

                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-booking">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-booking">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                                
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {
                                        callsToAction.map((item) => (
                                            <a href={item.href} key={item.name} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-primary hover:bg-gray-100">
                                                <item.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        ))
                                    }
                                </div>

                            </Popover.Panel>
                        </Transition>

                    </Popover>

                    {options.map(item => (
                        <a href={item.href} className="text-sm font-semibold leading-6">
                            {item.name}
                        </a>
                    ))}

                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold lg:justify-end">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10 bg-gray-900/50 backdrop-blur-sm" />

                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-booking p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    </Dialog.Panel>
                </Dialog>

            </nav>
        </header>
    )
}

export default Header