import Image from "next/image";
import Link from "next/link";

export default function FAQContact() {
    return (
        <section className="relative pt-20 pb-20">
            {/* Curved top effect */}
            <Image
                src="/images/faq-footer.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />

            <div className="relative z-10 w-full pt-28 pb-16 flex flex-col items-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Can’t find the answer to your question?
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    Contact us and we’ll get back to you as soon as we can.
                </h2>


                <Link href="/contact-us">
                    <button className="bg-teal-400 px-6 py-3 rounded-md font-semibold w-3xs mt-6 hover:bg-teal-500 transition-colors cursor-pointer">
                        Contact Us
                    </button>
                </Link>
            </div>
        </section>
    );
}
