"use client";

import { useState } from "react";
import Button from "../Button";

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate()) {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({ fullName: "", email: "", phone: "", company: "", description: "" });
            // Reset success message after 3 seconds
            setTimeout(() => setSubmitSuccess(false), 3000);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border-2 border-secondary-light rounded-lg p-8 shadow-lg w-full max-w-lg md:max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="Hasan@gmail.com"
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
                <div className="flex justify-end pt-2">
                    <Button
                        variant="teal"
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 shadow-md"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>

                {submitSuccess && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-md text-center font-bold">
                        Message Sent Successfully!
                    </div>
                )}
            </form>
        </div>
    );
}
