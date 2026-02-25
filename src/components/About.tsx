"use client";

import { motion } from "framer-motion";
import { Heart, Users, Ear, Star, Shield } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const PILLARS = [
    {
        icon: Ear,
        title: "Escuta atenta",
        text: "Tempo dedicado para ouvir o paciente e a família com cuidado.",
    },
    {
        icon: Heart,
        title: "Acolhimento",
        text: "Um espaço seguro, sem julgamentos, para compartilhar preocupações.",
    },
    {
        icon: Star,
        title: "Cuidado individualizado",
        text: "Cada plano é único, pensado para a realidade de cada paciente.",
    },
    {
        icon: Users,
        title: "Apoio à família",
        text: "Orientação clara para quem cuida, porque cuidar também exige cuidado.",
    },
    {
        icon: Shield,
        title: "Dignidade e qualidade de vida",
        text: "O foco está em viver bem, com conforto e autonomia em cada fase.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <section id="sobre" className="py-16 sm:py-24 bg-sky">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                        Sobre a médica
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text leading-tight">
                        Conheça a{" "}
                        <span className="text-blue-700">{DOCTOR.name}</span>
                    </h2>
                </motion.div>

                {/* Bio with Photo left + Text right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16"
                >
                    {/* Doctor Photo */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-80 sm:w-80 sm:h-[380px] lg:w-[340px] lg:h-[420px]">
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/40 to-rose/40 blur-sm" />
                            <div className="relative w-full h-full rounded-[1.75rem] bg-gradient-to-br from-blue-100 to-rose overflow-hidden shadow-lg">
                                {/* [FOTO_MEDICA_PRINCIPAL] — Substituir pelo componente Image com a foto real */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400">
                                    <svg
                                        width="64"
                                        height="64"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span className="mt-3 text-sm font-medium text-blue-300">
                                        [FOTO_MEDICA_SOBRE]
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-text mb-1">
                            {DOCTOR.name}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 mb-1">
                            {DOCTOR.specialty}
                        </p>
                        <p className="text-xs text-text-muted mb-5">
                            {DOCTOR.crm} • {DOCTOR.rqeGeriatria} • {DOCTOR.rqePaliativos}
                        </p>

                        <p className="text-base text-text-secondary leading-relaxed mb-4">
                            Formada pela <strong className="text-text">{DOCTOR.university}</strong>,
                            com residência em geriatria e cuidados paliativos pela{" "}
                            <strong className="text-text">{DOCTOR.residency.split(" — ")[0]}</strong>,
                            a {DOCTOR.name} atua há{" "}
                            <strong className="text-text">mais de 10 anos</strong> cuidando
                            de idosos e suas famílias. É apaixonada pelo que faz e acredita
                            que envelhecer com saúde, dignidade e qualidade de vida é
                            primordial — e possível, quando se tem o acompanhamento certo.
                        </p>

                        <p className="text-base text-text-secondary leading-relaxed mb-4">
                            Além do consultório, a Dra. Raquel realiza{" "}
                            <strong className="text-text">atendimento domiciliar</strong>,
                            levando o cuidado até a casa do paciente. Essa proximidade
                            permite enxergar o contexto real de vida, entender as
                            necessidades da família e oferecer orientações que realmente
                            fazem diferença no dia a dia. Para ela, cada paciente tem uma
                            história única — e o plano de cuidado precisa respeitar essa
                            individualidade.
                        </p>

                        <blockquote className="border-l-4 border-blue-300 pl-4 py-2 italic text-base text-text-secondary leading-relaxed">
                            &ldquo;Cada passo nesse processo é sobre garantir dignidade,
                            qualidade de vida e superar obstáculos. Porque, mesmo entre os
                            desafios, ainda podemos encontrar beleza e humanidade em cada
                            fase.&rdquo;
                        </blockquote>
                    </div>
                </motion.div>

                {/* Pillars */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
                >
                    {PILLARS.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            variants={cardVariants}
                            className="bg-cream rounded-2xl p-5 text-center hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-11 h-11 mx-auto rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-3">
                                <pillar.icon size={22} />
                            </div>
                            <h3 className="text-sm font-bold text-text mb-1">
                                {pillar.title}
                            </h3>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                {pillar.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
