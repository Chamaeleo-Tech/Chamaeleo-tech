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
        teal: "bg-primary text-white hover:bg-white hover:text-primary hover:border-primary",
        purple: "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary",
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
