"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "teal" | "purple";
    className?: string;
}

export default function Button({
    children,
    variant = "teal",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "px-6 py-3 rounded-md font-semibold transition-colors duration-300 border border-transparent cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
        teal: "bg-teal-400 text-white hover:bg-white hover:text-teal-500 hover:border-teal-500",
        purple: "bg-purple-700 text-white hover:bg-white hover:text-purple-800 hover:border-purple-800",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
