"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MoveInViewProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function MoveInView({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: MoveInViewProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 50, x: 0 };
            case "down":
                return { y: -50, x: 0 };
            case "left":
                return { x: 50, y: 0 };
            case "right":
                return { x: -50, y: 0 };
            default:
                return { y: 50, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
