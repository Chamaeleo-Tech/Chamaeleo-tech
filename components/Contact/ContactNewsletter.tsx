import Link from "next/link";
import Image from "next/image";

export default function ContactNewsletter() {
    return (
        <section className="relative pt-20 pb-20">
            {/* Curved top effect */}
            <Image
                src="/images/consultant-bg.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />

            <div className="relative max-w-7xl mx-auto z-10 w-full pt-28 pb-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold font-roboto leading-tight">
                        Stay up to date with our latest ideas and softwares
                    </h2>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="flex w-full bg-white rounded-lg p-2 shadow-lg">
                        <input
                            type="email"
                            placeholder="Enter Your Email..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700 bg-transparent min-w-0"
                        />
                        <Link href="/contact-us">
                            <button className="bg-purple-700 text-white font-bold px-6 py-3 rounded-md hover:bg-purple-800 transition-colors whitespace-nowrap cursor-pointer h-full">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
