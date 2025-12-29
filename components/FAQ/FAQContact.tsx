import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function FAQContact() {
    return (
        <section className="w-full relative flex flex-col items-center">
            {/* Curved top effect */}
            <Image
                src="/images/faq-footer.svg"
                alt="Background"
                fill
                className="object-cover object-top"
                priority
            />

            <div className="relative z-10 w-full pt-28 pb-16 flex flex-col items-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight font-roboto text-center px-4">
                    Can’t find the answer to your question?
                </h1>

                <p className="text-lg md:text-xl font-medium font-poppins text-center px-4 mt-6 max-w-2xl">
                    Contact us and we’ll get back to you as soon as we can.
                </p>


                <Link href="/contact-us">
                    <Button variant="teal" className="mt-6 w-3xs">
                        Contact Us
                    </Button>
                </Link>
            </div>
        </section>
    );
}
