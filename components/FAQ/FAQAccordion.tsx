"use client";

import { useState } from "react";

// Icons with props to control color
const PlusIcon = ({ className = "text-purple-600" }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
    </svg>
);

const MinusIcon = ({ className = "text-purple-600" }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
    </svg>
);

const faqData = [
    {
        category: "General Questions:",
        items: [
            { q: "What services does Chamaeleo offer?", a: "Chamaeleo offers a wide range of digital solutions including web development, mobile apps, and custom software tailored to your needs." },
            { q: "What services does Chamaeleo offer?", a: "We specialize in responsive design, scalable architectures, and user-centric interfaces." },
            { q: "What services does Chamaeleo offer?", a: "Our team provides end-to-end development services from concept to deployment and maintenance." },
        ]
    },
    {
        category: "Pricing & Accounts:",
        items: [
            { q: "What services does Chamaeleo offer?", a: "Pricing is tailored to each project's scope and requirements. Contact us for a quote!" },
            { q: "What services does Chamaeleo offer?", a: "We offer flexible engagement models including fixed-price and time-and-materials." },
            { q: "What services does Chamaeleo offer?", a: "Accounts are managed securely with industry-standard authentication protocols." },
        ]
    },
    {
        category: "Policy, Safety & Copyright:",
        items: [
            { q: "What services does Chamaeleo offer?", a: "We adhere to strict privacy policies and data protection standards." },
            { q: "What services does Chamaeleo offer?", a: "All code and assets produced are intellectual property transferred to the client upon completion." },
            { q: "What services does Chamaeleo offer?", a: "Safety is our priority, ensuring secure and robust application development." },
        ]
    },
    {
        category: "Other Questions:",
        items: [
            { q: "What services does Chamaeleo offer?", a: "Yes, we offer post-launch support and maintenance packages." },
            { q: "What services does Chamaeleo offer?", a: "We work with clients globally and can adjust to your timezone." },
            { q: "What services does Chamaeleo offer?", a: "Our team is proficient in the latest technologies including React, Next.js, and Node.js." },
        ]
    }
];

export default function FAQAccordion() {
    // Track open questions using an array of strings
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggle = (id: string) => {
        setOpenIds(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-black text-center text-4xl font-bold font-roboto mb-12 underline decoration-purple-500 decoration-4 underline-offset-8">FAQ</h2>

            <div className="space-y-12">
                {faqData.map((cat, catIdx) => (
                    <div key={catIdx}>
                        <h3 className="text-2xl font-bold font-poppins mb-4 text-gray-900">{cat.category}</h3>
                        <div className="space-y-4">
                            {cat.items.map((item, itemIdx) => {
                                const id = `${catIdx}-${itemIdx}`;
                                const isOpen = openIds.includes(id);

                                return (
                                    <div
                                        key={itemIdx}
                                        className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border ${isOpen ? 'bg-teal-400 border-teal-500' : 'bg-gray-100/80 border-transparent hover:bg-gray-100'}`}
                                        onClick={() => toggle(id)}
                                    >
                                        <div className="flex items-center p-5">
                                            <div className="mr-4 flex-shrink-0">
                                                {isOpen ? (
                                                    <MinusIcon className="text-purple-600 fill-white" />
                                                ) : (
                                                    <PlusIcon className="text-purple-600" />
                                                )}
                                            </div>
                                            <span className={`font-semibold font-poppins text-lg ${isOpen ? 'text-white' : 'text-gray-800'}`}>
                                                {item.q}
                                            </span>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className={`p-5 pt-0 pl-16 font-poppins leading-relaxed ${isOpen ? 'text-white' : 'text-gray-600'}`}>
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
