"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

const SIGNS = [
    {
        emoji: "🧠",
        title: "Esquecimentos frequentes",
        highlight:
            "Esquecimento de informações recentes e eventos importantes",
        body: "Quando os esquecimentos se repetem e começam a impactar a rotina, pode ser importante investigar.",
        impact:
            "Uma avaliação precoce ajuda a diferenciar alterações esperadas do envelhecimento de sinais que merecem acompanhamento.",
    },
    {
        emoji: "🌙",
        title: "Sono não reparador",
        highlight:
            "Acordar muitas vezes à noite e sentir que não descansou",
        body: "Alterações no sono podem afetar humor, memória, disposição e bem-estar.",
        impact:
            "Em idosos, o sono ruim também pode aumentar o risco de quedas e piorar outras condições de saúde.",
    },
    {
        emoji: "🍽️",
        title: "Perda de apetite ou peso",
        highlight: "Perda de apetite ou perda de peso involuntária",
        body: "Mudanças no apetite e no peso podem ter causas físicas, emocionais ou relacionadas a medicamentos.",
        impact:
            "Avaliar cedo ajuda a evitar fraqueza, desnutrição e maior vulnerabilidade.",
    },
    {
        emoji: "💪",
        title: "Fraqueza e cansaço",
        highlight:
            "Diminuição da força muscular, fadiga e dores frequentes",
        body: "Perda de força, cansaço persistente ou dores podem limitar atividades do dia a dia.",
        impact:
            "Isso pode comprometer mobilidade, independência e qualidade de vida.",
    },
    {
        emoji: "🚶",
        title: "Dificuldade para andar",
        highlight:
            "Movimentos lentos, passos arrastados ou insegurança ao caminhar",
        body: "Alterações na marcha podem surgir de forma gradual e passar despercebidas no início.",
        impact:
            "Observar esses sinais é importante para prevenir quedas e preservar autonomia.",
    },
    {
        emoji: "🧪",
        title: "Alterações em exames",
        highlight: "Exames com colesterol alto ou outras irregularidades",
        body: "Resultados alterados nem sempre indicam algo grave, mas precisam ser avaliados no contexto geral da saúde.",
        impact:
            "O acompanhamento ajuda a definir prioridades e próximos passos com mais segurança.",
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
                    <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                        Sinais de atenção
                    </span>
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

                            {/* Highlight phrase */}
                            <p className="text-sm font-medium text-blue-700 mb-2 leading-snug">
                                {sign.highlight}
                            </p>

                            {/* Body */}
                            <p className="text-sm text-text-secondary leading-relaxed mb-3">
                                {sign.body}
                            </p>

                            {/* Impact */}
                            <div className="pt-3 border-t border-border/40">
                                <p className="text-xs text-text-muted leading-relaxed italic">
                                    {sign.impact}
                                </p>
                            </div>
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
