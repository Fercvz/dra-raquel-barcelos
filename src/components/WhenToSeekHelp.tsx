"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

const SIGNS = [
    {
        emoji: "🧠",
        title: "Esquecimentos frequentes",
        body: "Quando os esquecimentos se repetem e começam a impactar a rotina, é importante investigar.",
    },
    {
        emoji: "🌙",
        title: "Sono não reparador",
        body: "Acordar muitas vezes à noite e sentir que não descansou, pode ser um alerta. Alterações no sono afetam humor, memória, disposição e bem-estar.",
    },
    {
        emoji: "🍽️",
        title: "Perda de apetite ou peso",
        body: "A perda de apetite ou a perda de peso involuntária podem ter causas físicas, emocionais ou relacionadas a medicamentos.",
    },
    {
        emoji: "💪",
        title: "Fraqueza e cansaço",
        body: "Diminuição da força muscular, fadiga, dores frequentes e cansaço persistente podem dificultar atividades do dia a dia.",
    },
    {
        emoji: "🚶",
        title: "Dificuldade para andar",
        body: "Movimentos lentos, passos arrastados ou insegurança ao caminhar. Essas alterações na marcha podem surgir de forma gradual e passar despercebidas no início mas precisam de atenção.",
    },
    {
        emoji: "🧪",
        title: "Alterações em exames",
        body: "Resultados alterados nos exames precisam ser avaliados no contexto geral da saúde.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhenToSeekHelp() {
    return (
        <section id="sinais" className="py-16 sm:py-24 bg-lavender">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Quando procurar ajuda?
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        Alguns sinais podem ser sutis, mas merecem atenção. Reconhecê-los é
                        o primeiro passo para cuidar melhor de quem você ama.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {SIGNS.map((sign) => (
                        <motion.div
                            key={sign.title}
                            variants={cardVariants}
                            className="bg-cream rounded-2xl p-6 border border-border/40 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                        >
                            {/* Emoji */}
                            <span className="text-3xl mb-3 block" role="img" aria-hidden="true">
                                {sign.emoji}
                            </span>

                            {/* Title */}
                            <h3 className="text-base font-bold text-text mb-2 group-hover:text-blue-700 transition-colors">
                                {sign.title}
                            </h3>

                            {/* Body */}
                            <p className="text-sm text-text-secondary leading-relaxed mb-3">
                                {sign.body}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA emocional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-6 leading-relaxed">
                        Se você percebeu um ou mais desses sinais em alguém da sua família,
                        uma avaliação pode trazer mais clareza e segurança para os próximos
                        passos.
                    </p>
                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={18} />
                        Falar no WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
