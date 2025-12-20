"use client";

import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "Next Step?",
        content: "When you reach out to us, a dedicated member of our team will respond promptly. We value clear, personalized communication and will make sure all your questions are fully addressed. Expect to hear from us by email — and, when needed, through a quick call — so you receive the support and guidance you deserve."
    },
    {
        id: 2,
        title: "Next Step?",
        content: "Once we understand your requirements, we'll schedule a detailed consultation to discuss your project scope, timeline, and budget. We believe in transparency and collaboration, ensuring we're aligned on every goal before moving forward."
    },
    {
        id: 3,
        title: "Next Step?",
        content: "After the consultation, our team kicks off the project with a solid plan. We keep you updated at every stage of development, delivering high-quality solutions that evolve with your business needs."
    }
];

export default function ContactSteps() {
    const [activeStep, setActiveStep] = useState<number | null>(1); // Default verify if first should be open or none. Image shows active step 1.

    const toggleStep = (id: number) => {
        setActiveStep(activeStep === id ? null : id);
    };

    return (
        <div className="flex flex-col space-y-6">
            {steps.map((step) => (
                <div key={step.id} className="cursor-pointer" onClick={() => toggleStep(step.id)}>
                    <div className="flex items-center gap-4 mb-2">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-white transition-colors ${activeStep === step.id ? 'bg-teal-400' : 'bg-teal-400'
                            }`}>
                            {step.id}
                        </div>
                        <h3 className="text-xl font-bold font-roboto text-gray-900">{step.title}</h3>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-14 ${activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-96 opacity-100'
                        }`}>
                        <p className="text-gray-600 font-poppins leading-relaxed text-sm md:text-base">
                            {step.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
