import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight font-roboto">
                    Get A Free Consultancy Right Now!
                </h1>


                <Link href="/contact-us">
                    <Button variant="purple" className="mt-6 w-3xs">
                        Book Now
                    </Button>
                </Link>
            </div>
        </section>
    );
}
