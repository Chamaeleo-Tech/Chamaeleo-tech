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
                    <div key={step.id} className="cursor-pointer" onClick={() => toggleStep(step.id)}>
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition-colors border-2 hover:border-purple-600 hover:text-purple-600 hover:bg-white ${isActive
                                ? 'border-purple-600 text-white bg-purple-600'
                                : 'border-teal-400 bg-teal-400 text-white'
                                }`}>
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold font-roboto text-gray-900">{step.title}</h3>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-14 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <p className="text-gray-600 font-poppins leading-relaxed text-sm md:text-base">
                                {step.content}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
