import Image from "next/image";
import Link from "next/link";

export default function Consultant() {
    return (
        <section className="w-full relative flex flex-col items-center">
            <Image
                src="/images/consultant-bg.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />

            <div className="relative z-10 w-full pt-28 pb-16 flex flex-col items-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Get A Free Consultancy Right Now!
                </h1>


                <Link href="/contact-us">
                    <button className="bg-purple-700 px-6 py-3 rounded-md font-semibold w-3xs mt-6 hover:bg-purple-800 transition-colors cursor-pointer">
                        Book Now
                    </button>
                </Link>
            </div>
        </section>
    );
}
