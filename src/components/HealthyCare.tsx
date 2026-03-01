"use client";

import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Activity, Leaf } from "lucide-react";

const CARE_CARDS = [
    {
        icon: HeartPulse,
        title: "Prevenção e acompanhamento",
        text: "O acompanhamento geriátrico ajuda a identificar e tratar condições de saúde antes que se agravem, promovendo mais anos com qualidade de vida.",
    },
    {
        icon: Activity,
        title: "Estilo de vida saudável",
        text: "Mesmo na fase adulta, hábitos adequados de alimentação, sono e atividade física fazem diferença significativa no dia a dia.",
    },
    {
        icon: ShieldCheck,
        title: "Autonomia e independência",
        text: "Prevenir é fortalecer a autonomia, para você viver com mais liberdade e segurança.",
    },
    {
        icon: Leaf,
        title: "Cuidado contínuo",
        text: "O envelhecimento é um processo natural e o cuidado precisa acompanhar esse ritmo, com reavaliações regulares e ajustes no plano de saúde.",
    },
];

export default function HealthyCare() {
    return (
        <section className="py-16 sm:py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Cuidar da saúde é um ato de amor por você e por sua família
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        O acompanhamento preventivo é um dos maiores cuidados que alguém
                        pode ter. Entenda por que ele faz tanta diferença.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {CARE_CARDS.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-cream rounded-2xl p-6 sm:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-100 transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-text mb-2">
                                {card.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
