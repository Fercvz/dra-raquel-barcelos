"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, UserCheck, HeartPulse } from "lucide-react";

const STEPS = [
    {
        icon: MessageCircle,
        step: "1",
        title: "Contato pelo WhatsApp",
        description:
            "Envie uma mensagem pelo WhatsApp. Nossa equipe responderá com agilidade e cuidado.",
    },
    {
        icon: ClipboardList,
        step: "2",
        title: "Entendimento da necessidade",
        description:
            "Conversamos brevemente para entender a situação e as principais preocupações da família.",
    },
    {
        icon: UserCheck,
        step: "3",
        title: "Definição do atendimento",
        description:
            "Juntos, definimos o melhor formato: consulta presencial, online ou domiciliar.",
    },
    {
        icon: HeartPulse,
        step: "4",
        title: "Consulta e orientação",
        description:
            "Consulta individualizada com orientação clara para o paciente e sua família.",
    },
];

export default function FirstVisit() {
    return (
        <section className="py-16 sm:py-24 bg-mint">
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
                        Primeira consulta
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Como funciona a primeira consulta?
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        O primeiro passo pode parecer difícil, mas é mais simples do que
                        você imagina. Estamos aqui para acolher.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden lg:block absolute top-16 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-blue-100" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative text-center lg:text-center"
                            >
                                {/* Step circle */}
                                <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                                    <step.icon size={24} />
                                </div>

                                {/* Step number */}
                                <span className="inline-block text-xs font-bold text-blue-500 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">
                                    Passo {step.step}
                                </span>

                                <h3 className="text-base font-semibold text-text mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
