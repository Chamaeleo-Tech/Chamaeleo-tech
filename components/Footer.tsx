"use client";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    const socialIcons = [
        { Icon: Linkedin, href: "#" },
        { Icon: Facebook, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Facebook, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Linkedin, href: "#" },
    ];

    const followIcons = [
        { Icon: Linkedin, href: "#" },
        { Icon: Facebook, href: "#" },
        { Icon: Instagram, href: "#" },
    ];

    return (
        <footer className="w-full bg-gray-200 pt-16 pb-8 text-gray-700 font-sans">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/images/logo.png" width={50} height={50} alt="Chamaeleo Logo" />
                        <span className="text-purple-700 font-bold text-lg">Chamaeleo Company</span>
                    </div>

                    <p className="font-semibold text-black">
                        Website is owned by <span className="text-purple-600">"Chamaelo.tech"</span>
                    </p>

                    <div className="flex gap-3">
                        {socialIcons.map((item, i) => (
                            <a key={i} href={item.href} className="bg-white p-2 rounded-full shadow-sm hover:shadow text-teal-500">
                                <item.Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-purple-700 font-bold text-lg">Links</h3>
                    <a href="#" className="hover:text-purple-600 font-medium">About Us</a>
                    <a href="#" className="hover:text-purple-600 font-medium">Services</a>
                    <a href="#" className="hover:text-purple-600 font-medium">Products</a>
                    <a href="#" className="hover:text-purple-600 font-medium">FAQ</a>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-purple-700 font-bold text-lg">Contact us</h3>
                    <p className="font-medium">+961 -3121212</p>
                    <p className="font-medium">Email@gmail.com</p>
                </div>

                {/* Follow Us Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-purple-700 font-bold text-lg">Follow us</h3>
                    <div className="flex flex-col gap-3">
                        {followIcons.map((item, i) => (
                            <a key={i} href={item.href} className="bg-white p-3 w-fit rounded-full shadow-sm hover:shadow text-teal-500">
                                <item.Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col items-center text-sm font-medium text-gray-800">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <a href="#" className="hover:text-purple-600">Terms&Condition</a>
                    <a href="#" className="hover:text-purple-600">Privacy & Policy</a>
                    <a href="#" className="hover:text-purple-600">Cookies</a>
                    <a href="#" className="hover:text-purple-600">License</a>
                </div>
                <p>Copyright @ 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
}
