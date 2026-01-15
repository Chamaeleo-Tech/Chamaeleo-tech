"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function ScreenWalker() {
    const { scrollYProgress, scrollY } = useScroll();
    const [isFacingRight, setIsFacingRight] = useState(true);
    const [isOverImage, setIsOverImage] = useState(false);
    const lastScrollY = useRef(0);

    // Map scroll progress to horizontal screen position
    const xRange = useTransform(scrollYProgress, [0, 1], ["-20vw", "120vw"]);
    const smoothX = useSpring(xRange, { stiffness: 100, damping: 20 });

    const checkOverlap = () => {
        // Walker is at fixed bottom-1/4, which is 75vh from top (or 25vh from bottom).
        // Y coordinate relative to viewport:
        if (typeof window === "undefined") return;

        const walkerY = window.innerHeight * 0.75;

        const hero = document.getElementById("hero-section");
        const consultant = document.getElementById("consultant-section");

        let overlap = false;

        if (hero) {
            const rect = hero.getBoundingClientRect();
            if (rect.top <= walkerY && rect.bottom >= walkerY) {
                overlap = true;
            }
        }

        if (!overlap && consultant) {
            const rect = consultant.getBoundingClientRect();
            if (rect.top <= walkerY && rect.bottom >= walkerY) {
                overlap = true;
            }
        }

        setIsOverImage(overlap);
    };

    // Detect scroll direction to flip the chameleon
    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;
        if (Math.abs(diff) > 1) {
            setIsFacingRight(diff > 0);
        }
        lastScrollY.current = latest;

        // Check overlap on scroll
        checkOverlap();
    });

    // Initial check
    useEffect(() => {
        checkOverlap();
        window.addEventListener("resize", checkOverlap);
        return () => window.removeEventListener("resize", checkOverlap);
    }, []);

    return (
        <motion.div
            style={{ x: smoothX }}
            animate={{ scaleX: isFacingRight ? -1 : 1 }}
            transition={{ scaleX: { duration: 0.2 } }}
            className="fixed bottom-1/4 z-10 pointer-events-none w-64 md:w-96 h-auto origin-center"
        >
            <Image
                src="/images/logo.svg"
                width={400}
                height={400}
                alt="Chamaeleo Walking"
                className="w-full h-auto drop-shadow-sm animate-walk-bounce"
                style={{
                    filter: isOverImage ? "brightness(0) invert(1) opacity(0.6)" : "opacity(0.1)",
                    transition: "filter 0.3s ease"
                }}
            />
        </motion.div>
    );
}
