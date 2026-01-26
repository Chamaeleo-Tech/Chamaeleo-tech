"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReachOut() {
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
        <section className="w-full relative flex flex-col items-center">
            <Image
                src="/images/consultant-bg.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />
            <div className="px-6 max-w-7xl relative z-10 w-full pt-28 pb-16 flex flex-col sm:flex-row gap-5 items-center text-white">

                <h1 className="text-4xl md:text-5xl font-bold leading-tight font-roboto text-center md:text-left">
                    Stay up to date with our latest ideas and software
                </h1>

                <div className="mt-6 mb-4 flex gap-2 bg-white rounded-lg p-4 w-full max-w-5xl shadow-lg">
                    <input
                        placeholder="Enter Your Email..."
                        className="px-4 py-3 rounded-md text-gray-800 w-full border-0 focus:outline-none font-poppins"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="purple" className="w-3xs" onClick={handleBookNow}>
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
