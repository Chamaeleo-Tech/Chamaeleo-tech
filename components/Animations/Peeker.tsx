"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PeekerProps {
    direction?: "left" | "right";
    offsetY?: number; // Adjust vertical position
}

export default function Peeker({ direction = "right", offsetY = 0 }: PeekerProps) {
    const isRight = direction === "right";

    return (
        <div
            className="relative w-full h-1 z-[60] pointer-events-none"
            style={{ transform: `translateY(${offsetY}px)` }}
        >
            <motion.div
                initial={{ x: isRight ? "100%" : "-100%", rotate: isRight ? 45 : -45 }}
                whileInView={{ x: isRight ? "50%" : "-50%", rotate: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                style={{ scaleX: isRight ? -1 : 1 }}
                className={`absolute -top-24 w-40 h-40 md:w-56 md:h-56 opacity-50 ${isRight ? "right-0" : "left-0"}`}
            >
                <Image
                    src="/images/logo.svg"
                    width={256}
                    height={256}
                    alt="Peeking Chameleon"
                    className="object-contain drop-shadow-2xl"
                />
            </motion.div>
        </div>
    );
}
