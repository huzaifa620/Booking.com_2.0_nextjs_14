'use client'

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-booking ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 bg-white">
                        <span className="sr-only">Booking.com</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/220px-Booking.com_logo.svg.png" alt="" className="h-12 w-auto" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header