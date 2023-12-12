import { HomeIcon, PhoneIcon, PlayCircleIcon } from "lucide-react";
import { PaperAirplaneIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export const products = [
    {
        name: "Book a Stay",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: HomeIcon
    },
    {
        name: "Book a Flight",
        description: "Speak directly to your customers",
        href: "#",
        icon: PaperAirplaneIcon
    },
    {
        name: "Contact our Support Team",
        description: "Your customers' data will be safe and secure",
        href: "#",
        icon: ChatBubbleLeftIcon
    }
]

export const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon }
]
