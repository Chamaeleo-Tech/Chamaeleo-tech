"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "About Us",
            href: "/about-us"
        },
        {
            title: "Services",
            href: "/#services"
        },
        {
            title: "FAQ",
            href: "/faq"
        }
    ];

    return (
        <nav className="fixed bg-white top-5 left-5 right-5 z-50 shadow-sm px-6 py-2 flex items-center justify-between rounded-xl">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        width={40}
                        height={40}
                        alt="logo"
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* Desktop */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                {links.map((l) => (
                    <li key={l.title} className="cursor-pointer hover:text-purple-600">
                        <Link href={l.href}>{l.title}</Link>
                    </li>
                ))}
            </ul>

            <Link href="/contact-us">
                <button className="hidden md:block bg-teal-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-600 transition-colors">
                    Contact Us
                </button>
            </Link>

            {/* Mobile icon */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 md:hidden">
                    {links.map((l) => (
                        <div key={l.title} className="text-gray-700 text-lg">
                            <Link href={l.href}>{l.title}</Link>
                        </div>
                    ))}

                    <Link href="/contact-us" className="w-full">
                        <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
