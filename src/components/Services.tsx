"use client";

import { motion } from "framer-motion";
import {
    Stethoscope,
    HeartHandshake,
    Building2,
    Monitor,
    Home,
    MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

const SERVICES = [
    {
        icon: Stethoscope,
        title: "Geriatria",
        description:
            "Avaliação integral da saúde do idoso, com foco em prevenção, controle de doenças crônicas e promoção de autonomia e qualidade de vida.",
        forWhom: "Para idosos que buscam acompanhamento médico especializado.",
        howHelps:
            "Ajuda a identificar condições precocemente, ajustar medicamentos e orientar paciente e família sobre os melhores cuidados.",
    },
    {
        icon: HeartHandshake,
        title: "Cuidados Paliativos",
        description:
            "Cuidado focado em conforto, alívio de sintomas e qualidade de vida para pacientes com doenças graves ou em fase avançada.",
        forWhom:
            "Para pacientes e famílias que enfrentam doenças graves e precisam de suporte integral.",
        howHelps:
            "Promove conforto, dignidade e menos sofrimento para o paciente e para quem cuida. Cuidados paliativos são muito mais do que o fim da vida: são sobre viver melhor.",
    },
    {
        icon: Building2,
        title: "Consulta Presencial",
        description:
            "Atendimento no consultório em Londrina-PR, com tempo dedicado para avaliação completa e orientação individualizada.",
        forWhom:
            "Para pacientes e familiares que preferem o contato presencial.",
        howHelps:
            "Permite uma avaliação mais detalhada, exame físico completo e construção de vínculo entre médica, paciente e família.",
    },
    {
        icon: Monitor,
        title: "Consulta Online",
        description:
            "Atendimento por videochamada com a mesma atenção e cuidado da consulta presencial, com a praticidade de estar em casa.",
        forWhom:
            "Para famílias que moram em outras cidades ou têm dificuldade de deslocamento.",
        howHelps:
            "Facilita o acesso ao atendimento geriátrico especializado, sem perder a qualidade do cuidado.",
    },
    {
        icon: Home,
        title: "Consulta Domiciliar",
        description:
            "Atendimento na casa do paciente, permitindo avaliar o contexto real de vida e adaptar o cuidado ao ambiente familiar.",
        forWhom:
            "Para pacientes com dificuldade de locomoção ou que se beneficiam de um olhar no ambiente domiciliar.",
        howHelps:
            "Vai além do paciente: observa a rotina, as condições de segurança e oferece orientação personalizada para a família e cuidadores.",
    },
];

export default function Services() {
    return (
        <section id="atendimentos" className="py-16 sm:py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight lg:whitespace-nowrap">
                        Conheça as formas de atendimento disponíveis
                    </h2>
                    <p className="mt-4 text-x1 text-text-secondary">
                        Cada pessoa é única e o cuidado também precisa ser.
                    </p>
                </motion.div>

                {/* Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 mb-10 border-2 border-border"
                >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F7E9E1] flex items-center justify-center text-[#9A7D6D] shrink-0">
                            <HeartHandshake size={22} />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-text mb-1">
                                Apoio à família e cuidadores
                            </h3>
                            <p className="text-base text-text-secondary leading-relaxed">
                                Em todos os atendimentos, a família é parte essencial do cuidado. Oferecemos escuta e suporte, pois acreditamos que quem cuida também merece ser cuidado.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white rounded-2xl p-6 border-2 border-border hover:shadow-lg hover:border-[#C4AB9D] transition-all duration-300 flex flex-col group"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#F7E9E1] flex items-center justify-center text-[#9A7D6D] mb-4 group-hover:bg-[#EEDDD3] transition-colors">
                                <service.icon size={22} />
                            </div>

                            <h3 className="text-2xl font-semibold text-text mb-2">
                                {service.title}
                            </h3>

                            <p className="text-lg text-text-secondary leading-relaxed mb-3">
                                {service.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-border/40 space-y-2">
                                <p className="text-base text-text-muted">
                                    <strong className="text-text-secondary">Para quem:</strong>{" "}
                                    {service.forWhom}
                                </p>
                                <p className="text-sm text-text-muted">
                                    <strong className="text-text-secondary">
                                        Como pode ajudar:
                                    </strong>{" "}
                                    {service.howHelps}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
