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
        <footer className="w-full bg-gray-200 pt-16 pb-8 text-gray-700 font-sans sm:flex sm:flex-col sm:items-center sm:justify-between">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Column */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/images/logo.svg" width={50} height={50} alt="Chamaeleo Logo" />
                        <span className="text-secondary font-bold text-lg">Chamaeleo Company</span>
                    </div>

                    <p className="font-semibold text-black">
                        Website is owned by <span className="text-secondary">"Chamaelo.tech"</span>
                    </p>
                </div>

                {/* Links Column */}
                <div className="flex flex-col items-center gap-4">
                    <h3 className="font-poppins text-secondary font-bold text-lg">Links</h3>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">About Us</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">Services</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">Products</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">FAQ</a>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-secondary font-bold text-lg">Contact us</h3>
                    <p className="font-medium">+961 -3269958</p>
                    <p className="font-medium">support@chamaeleo.tech</p>
                </div>

                {/* Follow Us Column */}
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-secondary font-bold text-lg">Follow us</h3>
                    <div className="flex flex-col gap-3">
                        {followIcons.map((item, i) => (
                            <a key={i} href={item.href} className="bg-white p-3 w-fit rounded-full shadow-sm hover:shadow text-primary hover:text-secondary">
                                <item.Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col items-center text-sm font-medium text-gray-800">
                <div className="flex flex-wrap justify-center gap-6 mb-4 font-poppins">
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">Terms&Condition</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">Privacy & Policy</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">Cookies</a>
                    <a href="#" className="hover:font-bold hover:underline hover:decoration-secondary hover:decoration-2">License</a>
                </div>
                <p>Copyright @ 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
}
