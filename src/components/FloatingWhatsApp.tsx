"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            aria-label="Abrir WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        >
            <MessageCircle size={26} />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/30 pointer-events-none" />
        </motion.a>
    );
}
