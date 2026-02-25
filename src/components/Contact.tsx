"use client";

import { motion } from "framer-motion";
import { MessageCircle, AlertTriangle } from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/constants";

export default function Contact() {
    return (
        <section id="contato" className="py-16 sm:py-24 bg-blue-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                        Contato
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Estamos prontos para acolher você
                    </h2>
                    <p className="mt-4 text-text-secondary leading-relaxed max-w-lg mx-auto">
                        Se está em busca de orientação, acolhimento ou deseja saber mais
                        sobre o cuidado geriátrico e paliativo, entre em contato pelo
                        WhatsApp. O primeiro passo é conversar.
                    </p>

                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={22} />
                        Falar no WhatsApp
                    </a>

                    <p className="mt-3 text-sm text-text-muted">
                        {CONTACT.whatsappDisplay}
                    </p>

                    {/* Emergency notice */}
                    <div className="mt-8 inline-flex items-center gap-2 text-xs text-text-muted bg-cream px-4 py-2.5 rounded-xl">
                        <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                        <span>
                            Em caso de urgência ou emergência, procure atendimento de
                            emergência.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
