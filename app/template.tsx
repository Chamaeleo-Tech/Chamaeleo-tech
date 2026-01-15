"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Enforce scroll to top on page transition
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
