"use client";

import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Physics for the cursor follower
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Splash state
    const [splashes, setSplashes] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleClick = (e: MouseEvent) => {
            const id = Date.now();
            setSplashes((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

            // Remove splash after animation
            setTimeout(() => {
                setSplashes((prev) => prev.filter((s) => s.id !== id));
            }, 1000);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("click", handleClick);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Main Cursor Ring */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 border-2 border-teal-500 rounded-full"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            {/* Center Dot */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-purple-600 rounded-full"
                style={{
                    x: cursorX, // Follows instantly (or slightly faster spring)
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Splashes */}
            <AnimatePresence>
                {splashes.map((splash) => (
                    <motion.div
                        key={splash.id}
                        initial={{ opacity: 0.8, scale: 0 }}
                        animate={{ opacity: 0, scale: 4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-0 left-0 w-12 h-12 bg-teal-500/20 border border-teal-500/50 rounded-full"
                        style={{
                            left: splash.x,
                            top: splash.y,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
