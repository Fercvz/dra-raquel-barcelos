"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { OFFICE, CONTACT } from "@/lib/constants";

export default function Office() {
    return (
        <section id="consultorio" className="py-16 sm:py-24 bg-cream">
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
                        Consultório
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                        Onde estamos
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        Consultório localizado em{" "}
                        <strong className="text-text">{OFFICE.city}-{OFFICE.state}</strong>,
                        em ambiente acolhedor e acessível.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-cream rounded-2xl p-6 sm:p-8 border border-border/40 space-y-5"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-text mb-1">
                                    Endereço
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    {OFFICE.address}
                                    <br />
                                    {OFFICE.neighborhood}, {OFFICE.city} - {OFFICE.state}
                                    <br />
                                    CEP: {OFFICE.zip}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-text mb-1">
                                    Telefone
                                </h3>
                                <p className="text-sm text-text-secondary">{CONTACT.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-text mb-1">
                                    Horário de funcionamento
                                </h3>
                                <p className="text-sm text-text-secondary">{OFFICE.hours}</p>
                            </div>
                        </div>

                        <a
                            href={OFFICE.mapLinkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-xl hover:bg-blue-100 transition-colors"
                        >
                            <ExternalLink size={16} />
                            Abrir no mapa
                        </a>
                    </motion.div>

                    {/* Map Embed Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl border border-border/40 overflow-hidden min-h-[300px] relative"
                    >
                        {OFFICE.mapEmbedUrl ? (
                            <iframe
                                src={OFFICE.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: 300 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização do consultório"
                            />
                        ) : (
                            /* [MAPA_EMBED_URL] — Substituir pela URL embed do Google Maps */
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 bg-blue-50/30">
                                <MapPin size={40} />
                                <span className="mt-3 text-sm font-medium text-blue-300">
                                    [MAPA_EMBED_URL]
                                </span>
                                <span className="mt-1 text-xs text-text-muted">
                                    Mapa será exibido aqui
                                </span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
