import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

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

            <div className="relative z-10 w-full pt-16 flex flex-col items-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight font-roboto">
                    Can’t find the answer to your question?
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight font-roboto">
                    Contact us and we’ll get back to you as soon as we can.
                </h2>


                <Link href="/contact-us">
                    <Button variant="teal" className="mt-6 w-3xs">
                        Contact Us
                    </Button>
                </Link>
            </div>
        </section>
    );
}
