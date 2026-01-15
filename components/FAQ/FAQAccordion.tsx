"use client";

import { useState } from "react";

// Icons with props to control color
const PlusIcon = ({ className = "text-secondary" }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
    </svg>
);

const MinusIcon = ({ className = "text-secondary" }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
    </svg>
);

const faqData = [
    {
        category: "General Questions:",
        items: [
            {
                q: "What does Chamaelo do?",
                a: "Chamaelo designs and builds adaptive digital solutions, including websites, custom software, and applications that evolve with your business needs.",
            },
            {
                q: "Who do you work with?",
                a: "We work with startups, growing businesses, and established companies looking for scalable, user-focused digital solutions.",
            },
            {
                q: "Do you handle projects from idea to launch?",
                a: "Yes. We provide end-to-end services — from strategy and UX/UI design to development, launch, and ongoing optimization.",
            },
        ]
    },
    {
        category: "Pricing & Accounts:",
        items: [
            {
                q: "How do you price your services?",
                a: "Our pricing is project-based and depends on scope, complexity, and timelines. We provide clear, transparent quotes before starting.",
            },
            {
                q: "Do you offer custom packages?",
                a: "Absolutely. Every project is tailored to your goals, ensuring you only pay for what your business truly needs.",
            },
            {
                q: "How do payments work?",
                a: "Payments are typically divided into milestones to ensure clarity, flexibility, and mutual trust throughout the project.",
            },
        ]
    },
    {
        category: "Policy, Safety & Copyright:",
        items: [
            {
                q: "Who owns the final product?",
                a: "Once the project is completed and payment is finalized, full ownership and rights are transferred to the client.",
            },
            {
                q: "How do you protect client data and privacy?",
                a: "We follow strict security and confidentiality practices to ensure your data and intellectual property are always protected.",
            },
            {
                q: "Do you reuse designs or code?",
                a: "No. Every solution we deliver is custom-built to meet each client’s unique needs, unless otherwise agreed upon.",
            },
        ]
    },
    {
        category: "Other Questions:",
        items: [
            {
                q: "Do you offer post-launch support?",
                a: "Yes. We provide maintenance, updates, and optimization services to help your product grow over time.",
            },
            {
                q: "Can you work with existing systems or designs?",
                a: "Of course. We can improve, redesign, or integrate with existing platforms and products.",
            },
            {
                q: "How do we get started?",
                a: "Simply contact us through our website. We’ll schedule a discovery session to understand your goals and propose the next steps.",
            },
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
            <h2 className="text-black text-center text-4xl font-bold font-roboto mb-12 underline decoration-secondary-light decoration-6 underline-offset-12">FAQ</h2>

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
                                        className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border ${isOpen ? 'bg-primary border-primary' : 'bg-gray-100/80 border-transparent hover:bg-gray-100'}`}
                                        onClick={() => toggle(id)}
                                    >
                                        <div className="flex items-center p-5">
                                            <div className="mr-4 flex-shrink-0">
                                                {isOpen ? (
                                                    <MinusIcon className="text-secondary fill-white" />
                                                ) : (
                                                    <PlusIcon className="text-secondary" />
                                                )}
                                            </div>
                                            <span className={`font-semibold font-poppins text-lg ${isOpen ? 'text-white' : 'text-gray-800'}`}>
                                                {item.q}
                                            </span>
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className={`p-5 pt-0 pl-4 md:pl-16 font-poppins leading-relaxed ${isOpen ? 'text-white' : 'text-gray-600'}`}>
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
