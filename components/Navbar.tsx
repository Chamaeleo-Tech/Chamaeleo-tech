"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = ["About Us", "Services", "FAQ"];

    return (
        <nav className="w-full fixed bg-white top-0 left-0 z-50 shadow-sm px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src="/images/logo.png"
                    width={40}
                    height={40}
                    alt="logo"
                />
                <span className="font-bold text-xl text-purple-700">Chamaeleo</span>
            </div>

            {/* Desktop */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                {links.map((l) => (
                    <li key={l} className="cursor-pointer hover:text-purple-600">
                        {l}
                    </li>
                ))}
            </ul>

            <button className="hidden md:block bg-teal-500 text-white px-4 py-2 rounded-lg">
                Contact Us
            </button>

            {/* Mobile icon */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 md:hidden">
                    {links.map((l) => (
                        <div key={l} className="text-gray-700 text-lg">
                            {l}
                        </div>
                    ))}

                    <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md">
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
}
