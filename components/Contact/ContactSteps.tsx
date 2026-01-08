"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "First Step",
        content: "When you reach out to us, a dedicated member of our team will respond promptly. We value clear, personalized communication and will make sure all your questions are fully addressed. Expect to hear from us by email — and, when needed, through a quick call — so you receive the support and guidance you deserve."
    },
    {
        id: 2,
        title: "Next Step",
        content: "Once we understand your requirements, we'll schedule a detailed consultation to discuss your project scope, timeline, and budget. We believe in transparency and collaboration, ensuring we're aligned on every goal before moving forward."
    },
    {
        id: 3,
        title: "Last Step",
        content: "After the consultation, our team kicks off the project with a solid plan. We keep you updated at every stage of development, delivering high-quality solutions that evolve with your business needs."
    }
];

export default function ContactSteps() {
    const [activeSteps, setActiveSteps] = useState<number[]>([1]); // Default step 1 open

    const toggleStep = (id: number) => {
        setActiveSteps((prev) =>
            prev.includes(id) ? prev.filter((stepId) => stepId !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col space-y-6">
            {steps.map((step) => {
                const isActive = activeSteps.includes(step.id);
                return (
                    <div key={step.id} className="cursor-pointer group" onClick={() => toggleStep(step.id)}>
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition-colors border-2 hover:border-secondary hover:text-secondary hover:bg-white ${isActive
                                ? 'border-secondary text-white bg-secondary'
                                : 'border-primary bg-primary text-white'
                                }`}>
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold font-roboto text-gray-900 group-hover:text-secondary transition-colors">{step.title}</h3>
                        </div>

                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden pl-14"
                                >
                                    <p className="text-gray-600 font-poppins leading-relaxed text-sm md:text-base pb-2">
                                        {step.content}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
