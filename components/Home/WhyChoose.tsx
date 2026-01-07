import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyChoose() {
    const features = [
        {
            title: "Expertise & Innovation",
            description: "Our team blends creativity with technical expertise to design and develop adaptive software, websites, and mobile applications that create real impact and measurable results."
        },
        {
            title: "Comprehensive Solutions",
            description: "From UX/UI design and web development to business process automation and custom application development, we provide end-to-end digital solutions tailored to your goals."
        },
        {
            title: "Client-Centered Approach",
            description: "We believe in long-term collaboration and adaptability. Your growth fuels our innovation, and your success drives everything we build. Together, we transform ideas into solutions that grow stronger over time."
        },
        {
            title: "Adaptability & Scalability",
            description: "We build solutions with the future in mind. Our products are designed to adapt, scale, and evolve as your business grows, ensuring your technology never holds you back, but moves forward with you."
        }
    ];

    return (
        <section className="mx-auto w-[calc(100%-2.5rem)] max-w-7xl bg-white mt-16 px-6 py-20 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl text-black md:text-5xl font-bold font-roboto mb-6 underline decoration-secondary-light decoration-6 underline-offset-11">
                        Why Choose Us
                    </h2>

                    <p className="text-gray-700 leading-relaxed font-poppins mb-10 text-lg">
                        As an adaptive tech company, we take pride in delivering innovative digital solutions that evolve with our clients’ needs. We don’t just build products, we create technology that grows, adapts, and delivers long-term value.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 ${[
                                            "bg-secondary",
                                            "bg-primary",
                                            "bg-[#7BCB96]",
                                            "bg-[#3193BA]"
                                        ][index]
                                            }`}
                                    >
                                        <Check className="text-white w-4 h-4" strokeWidth={5} />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed pl-1">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px]">
                        <Image
                            src="/images/illustration.png"
                            width={500}
                            height={500}
                            alt="Why Choose Illustration"
                            className="object-contain w-full h-auto transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-105 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
