"use client";

import { motion } from "framer-motion";
import { MessageCircle, AlertTriangle } from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/constants";

export default function Contact() {
    return (
        <section id="contato" className="py-16 sm:py-24 bg-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight lg:whitespace-nowrap">
                        Estamos prontos para acolher você
                    </h2>
                    <p className="mt-4 text-2xl text-text-secondary max-w-5xl mx-auto px-4">
                        Se está em busca de orientação, acolhimento ou deseja saber mais sobre o cuidado geriátrico e paliativo, entre em contato pelo WhatsApp. O primeiro passo é conversar.
                    </p>

                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={22} />
                        Falar no WhatsApp
                    </a>

                    <p className="mt-3 text-sm text-text-muted">
                        {CONTACT.whatsappDisplay}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
