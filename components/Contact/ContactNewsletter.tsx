"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactNewsletter() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleBookNow = () => {
        if (email.trim()) {
            window.location.href = `mailto:support@chamaeleo.tech?body=I am interested in your services. My email is: ${email}`;
        } else {
            router.push("/contact-us");
        }
    };

    return (
        <section className="relative mt-20">
            {/* Curved top effect */}
            <Image
                src="/images/consultant-bg.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />

            <div className="relative max-w-7xl mx-auto z-10 w-full pt-28 pb-16 px-6 flex flex-col sm:flex-row gap-5 items-center text-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold font-roboto leading-tight">
                        Stay up to date with our latest ideas and softwares
                    </h1>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="flex w-full bg-white rounded-lg p-2 shadow-lg">
                        <input
                            type="email"
                            placeholder="Enter Your Email..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700 bg-transparent min-w-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button variant="purple" className="h-full px-6 py-3 whitespace-nowrap" onClick={handleBookNow}>
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
