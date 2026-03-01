"use client";

import { motion } from "framer-motion";
import { Heart, Users, Ear, Star, Shield } from "lucide-react";
import Image from "next/image";
import { DOCTOR } from "@/lib/constants";

const PILLARS = [
    {
        icon: Ear,
        title: "Escuta atenta",
        text: "Tempo dedicado para ouvir o paciente e a família com cuidado.",
    },
    {
        icon: Star,
        title: "Cuidado individualizado",
        text: "Cada plano é único, pensado para a realidade de cada paciente.",
    },
    {
        icon: Users,
        title: "Apoio à família",
        text: "Orientação clara para toda a família.",
    },
    {
        icon: Shield,
        title: "Qualidade de vida",
        text: "O foco é viver bem, com conforto e autonomia em cada fase da vida.",
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
        <section id="sobre" className="py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mx-auto mb-14"
                >

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight lg:whitespace-nowrap">
                        Conheça a{" "}
                        <span className="text-text">{DOCTOR.name}</span>
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
                        <div className="relative w-80 h-[380px] sm:w-[400px] sm:h-[480px] lg:w-[440px] lg:h-[520px]">
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#EEDDD3]/40 to-rose/40 blur-sm" />
                            <div className="relative w-full h-full rounded-[1.75rem] bg-gradient-to-br from-[#F7E9E1] to-rose overflow-hidden shadow-lg">
                                <Image
                                    src="/dra-raquel-sobre.jpg"
                                    alt="Dra. Raquel Barcelos — Geriatra e Paliativista"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 340px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-text mb-1">
                            {DOCTOR.name}
                        </h3>
                        <p className="text-base text-text-secondary mb-4">
                            {DOCTOR.crm}    |    {DOCTOR.rqeGeriatria}    |    {DOCTOR.rqePaliativos}
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed mb-4 text-justify">
                            Formada pela <strong className="text-text">{DOCTOR.university}</strong>,
                            com residência em geriatria e cuidados paliativos pela{" "}
                            <strong className="text-text">{DOCTOR.residency.split(" — ")[0]}</strong>,
                            a {DOCTOR.name} atua há{" "}
                            <strong className="text-text">mais de 10 anos</strong> cuidando
                            de idosos e suas famílias. É apaixonada pelo que faz e acredita
                            que envelhecer com saúde, dignidade e qualidade de vida é
                            primordial e possível, quando se tem o acompanhamento certo.
                        </p>

                        <p className="text-lg text-text-secondary leading-relaxed mb-4 text-justify">
                            Além do consultório, a Dra. Raquel realiza{" "}
                            <strong className="text-text">atendimento domiciliar</strong>,
                            levando o cuidado até a casa do paciente. Essa proximidade
                            permite enxergar o contexto real de vida, entender as
                            necessidades da família e oferecer orientações que realmente
                            fazem diferença no dia a dia. Para ela, cada paciente tem uma
                            história única e o plano de cuidado precisa respeitar essa
                            individualidade.
                        </p>

                    </div>
                </motion.div>

                {/* Pillars */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {PILLARS.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            variants={cardVariants}
                            className="bg-[#F7E9E1] rounded-2xl p-5 text-center hover:shadow-md transition-shadow duration-300 border border-border"
                        >
                            <div className="w-11 h-11 mx-auto rounded-xl bg-white flex items-center justify-center text-[#9A7D6D] mb-3">
                                <pillar.icon size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-1">
                                {pillar.title}
                            </h3>
                            <p className="text-base text-text-secondary leading-relaxed">
                                {pillar.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
