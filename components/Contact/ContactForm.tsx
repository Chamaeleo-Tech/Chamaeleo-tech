"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";

const phrases = ["Want a Website?", "A System for your Company?", "Just send us a message!"];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        description: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Typing Animation State
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (!isDeleting && text === fullText) {
                // Pause at end of phrase
                setTypingSpeed(2000);
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                // Pause before next phrase
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            } else {
                // Normal typing/deleting speed
                setTypingSpeed(isDeleting ? 50 : 150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
        if (!formData.description.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate()) {
            // Construct Mailto Link
            const subject = encodeURIComponent(`Contact Form: ${formData.fullName}`);
            const body = encodeURIComponent(
                `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.description}`
            );

            // Create temporary link to force new tab behavior
            const link = document.createElement('a');
            link.href = `mailto:support@chamaeleo.tech?subject=${subject}&body=${body}`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setSubmitSuccess(true);
            setFormData({ fullName: "", email: "", phone: "", company: "", description: "" });

            // Reset success message after 6 seconds
            setTimeout(() => setSubmitSuccess(false), 6000);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border-2 border-secondary-light rounded-lg p-8 shadow-lg w-full mx-auto flex flex-col">
            {/* Typing Animation Header */}
            <div className="mb-6 h-8 text-center">
                <span
                    className="text-xl md:text-2xl font-bold font-roboto"
                    style={{
                        background: "linear-gradient(to right, #35ACAA, #774FAF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                    }}
                >
                    {text}
                </span>
                <span className="animate-blink text-secondary font-bold text-xl md:text-2xl">|</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                {/* Full Name */}
                <div>
                    <label className="block text-gray-800 font-bold mb-1 font-roboto">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Hasan Abbas"
                        className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary-light bg-white font-poppins placeholder:font-poppins placeholder:text-gray-400`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                    <label className="block text-gray-800 font-bold mb-1 font-roboto">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Support@chamaeleo.tech"
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary-light bg-white font-poppins placeholder:font-poppins placeholder:text-gray-400`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-gray-800 font-bold mb-1 font-roboto">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+961 - 3121212"
                        className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary-light bg-white font-poppins placeholder:font-poppins placeholder:text-gray-400`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Company */}
                <div>
                    <label className="block text-gray-800 font-bold mb-1 font-roboto">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="company name (optional)"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-light bg-white font-poppins placeholder:font-poppins placeholder:text-gray-400"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-800 font-bold mb-1 font-roboto">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description here..."
                        rows={4}
                        className={`w-full px-4 py-3 rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-secondary-light bg-white font-poppins resize-none placeholder:font-poppins placeholder:text-gray-400`}
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                    <Button
                        variant="teal"
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 shadow-md"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>

                {/* Centered Floating Success Alert via Portal using Framer Motion */}
                {typeof document !== 'undefined' && createPortal(
                    <AnimatePresence>
                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="fixed top-10 left-1/2 -translate-x-1/2 z-[9999]"
                            >
                                <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-md shadow-2xl p-[2px]">
                                    {/* Gradient Border Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 opacity-80" />

                                    <div className="relative bg-white rounded-[10px] px-8 py-6 flex flex-col items-center justify-center gap-3 min-w-[320px]">
                                        {/* Animated Check Icon */}
                                        <div className="rounded-full bg-green-100 p-3 mb-1">
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#10B981"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </motion.svg>
                                        </div>

                                        <div className="text-center">
                                            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                                                Message Sent!
                                            </h3>
                                            <p className="text-gray-500 text-sm font-medium mt-1">
                                                We'll get back to you shortly.
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setSubmitSuccess(false)}
                                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </form>
        </div>
    );
}
