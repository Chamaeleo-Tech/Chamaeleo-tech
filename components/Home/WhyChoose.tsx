"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="mx-auto w-[calc(100%-2.5rem)] max-w-7xl bg-white mt-16 px-6 py-14 rounded-lg">
            <div>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl text-black md:text-5xl font-bold font-roboto mb-6 underline decoration-secondary-light decoration-6 underline-offset-12"
                >
                    Why Choose Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-700 leading-relaxed font-poppins text-lg max-w-4xl"
                >
                    As an adaptive tech company, we take pride in delivering innovative digital solutions that evolve with our clients’ needs. We don’t just build products, we create technology that grows, adapts, and delivers long-term value.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Left Column Features */}
                <motion.div
                    className="flex flex-col gap-8 order-2 lg:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Expertise & Innovation */}
                    <motion.div
                        className="flex flex-col gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 bg-secondary">
                                <Check className="text-white w-4 h-4" strokeWidth={5} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">{features[0].title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pl-1">
                            {features[0].description}
                        </p>
                    </motion.div>

                    {/* Adaptability & Scalability */}
                    <motion.div
                        className="flex flex-col gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 bg-quaternary">
                                <Check className="text-white w-4 h-4" strokeWidth={5} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">{features[3].title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pl-1">
                            {features[3].description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Center Image */}
                <div className="flex justify-center lg:order-2 order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[500px]"
                    >
                        <img
                            src="/images/illustrated_cham.png"
                            alt="Why Choose Illustration"
                            className="object-contain w-full h-auto transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-105 cursor-pointer"
                        />
                    </motion.div>
                </div>

                {/* Right Column Features */}
                <motion.div
                    className="flex flex-col gap-8 order-3 lg:order-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Comprehensive Solutions */}
                    <motion.div
                        className="flex flex-col gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 bg-primary">
                                <Check className="text-white w-4 h-4" strokeWidth={5} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">{features[1].title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pl-1">
                            {features[1].description}
                        </p>
                    </motion.div>

                    {/* Client-Centered Approach */}
                    <motion.div
                        className="flex flex-col gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 bg-tertiary">
                                <Check className="text-white w-4 h-4" strokeWidth={5} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">{features[2].title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pl-1">
                            {features[2].description}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
