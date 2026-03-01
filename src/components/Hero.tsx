"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { DOCTOR, getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
        >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose/30 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text leading-tight tracking-tight">
                            Cuidar de quem você ama com mais segurança, acolhimento e
                            qualidade de vida.
                        </h1>

                        <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Atendimento em geriatria e cuidados paliativos com escuta atenta, orientações claras e um plano de cuidado feito para você e seus familiares.
                        </p>

                        {/* Credentials */}


                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <MessageCircle size={18} />
                                Falar no WhatsApp
                            </a>
                            <a
                                href="#atendimentos"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-blue-200 text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200"
                            >
                                Conheça os atendimentos
                            </a>
                        </div>
                    </motion.div>

                    {/* Doctor Photo Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-[360px] lg:h-[440px]">
                            {/* Decorative rings */}
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/40 to-rose/40 blur-sm" />
                            <div className="relative w-full h-full rounded-[1.75rem] bg-gradient-to-br from-blue-100 to-rose overflow-hidden shadow-lg">
                                <Image
                                    src="/dra-raquel.jpg"
                                    alt="Dra. Raquel Barcelos — Geriatra e Paliativista"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 360px"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="hidden lg:flex justify-center mt-12"
                >
                    <a
                        href="#sobre"
                        className="text-text-muted hover:text-blue-500 transition-colors animate-bounce"
                        aria-label="Rolar para próxima seção"
                    >
                        <ChevronDown size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
