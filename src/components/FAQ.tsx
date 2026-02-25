"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "Cuidados paliativos são apenas para o fim da vida?",
        answer:
            "Não. Os cuidados paliativos podem — e devem — ser iniciados muito antes do fim da vida. Eles focam em oferecer conforto, alívio de sintomas e qualidade de vida para pacientes com doenças graves, em qualquer fase. O objetivo é ajudar a pessoa a viver melhor, com dignidade e menos sofrimento.",
    },
    {
        question: "A consulta pode ser online?",
        answer:
            "Sim. Oferecemos consultas por videochamada com a mesma atenção e qualidade do atendimento presencial. É uma opção prática para famílias que moram em outras cidades ou têm dificuldade de deslocamento.",
    },
    {
        question: "Como funciona o atendimento domiciliar?",
        answer:
            "No atendimento domiciliar, a Dra. Raquel vai até a casa do paciente para realizar a consulta. Isso permite avaliar o ambiente real de vida, identificar fatores de risco e oferecer orientações personalizadas para a família e cuidadores. É um cuidado que vai além do paciente.",
    },
    {
        question: "A família pode participar da consulta?",
        answer:
            "Sim, e é muito bem-vinda. A participação da família é encorajada porque familiares e cuidadores são parte essencial do cuidado. Na consulta, há espaço para tirar dúvidas, receber orientações e planejar juntos os próximos passos.",
    },
    {
        question: "Como agendar pelo WhatsApp?",
        answer:
            "Basta enviar uma mensagem pelo WhatsApp para o número (43) 99944-0505. A equipe responderá com agilidade para entender sua necessidade e agendar o melhor horário.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 bg-rose">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                        Dúvidas frequentes
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Perguntas frequentes
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        Reunimos as dúvidas mais comuns para ajudar você e sua família.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {FAQ_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className={`rounded-2xl border transition-colors duration-200 ${openIndex === index
                                ? "border-blue-200 bg-blue-50/30"
                                : "border-border/40 bg-cream"
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-sm sm:text-base font-semibold text-text">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 text-text-muted transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`faq-content ${openIndex === index ? "open" : ""}`}
                            >
                                <div>
                                    <div className="px-5 pb-5">
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
