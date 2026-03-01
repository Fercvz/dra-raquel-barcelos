"use client";

import { Instagram, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { DOCTOR, CONTACT, OFFICE, LINKS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-[#DFD0C4] text-text pt-12 pb-24 sm:pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {/* Column 1: Doctor info */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="font-semibold text-text text-sm">
                                {DOCTOR.name}
                            </span>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">{DOCTOR.specialty}</p>
                        <div className="space-y-1 text-xs text-text-muted">
                            <p>{DOCTOR.crm}</p>
                            <p>{DOCTOR.rqeGeriatria}</p>
                            <p>{DOCTOR.rqePaliativos}</p>
                        </div>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-text mb-3">Contato</h4>
                        <div className="space-y-2.5 text-sm">
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Phone size={14} />
                                {CONTACT.phone}
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Phone size={14} />
                                {CONTACT.whatsappDisplay}
                            </div>
                            <a
                                href={CONTACT.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-text-secondary hover:text-pink-500 transition-colors"
                            >
                                <Instagram size={14} />
                                {CONTACT.instagramHandle}
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Address */}
                    <div>
                        <h4 className="text-sm font-semibold text-text mb-3">
                            Consultório
                        </h4>
                        <div className="space-y-2.5 text-sm">
                            <div className="flex items-start gap-2 text-text-secondary">
                                <MapPin size={14} className="shrink-0 mt-0.5" />
                                <span>
                                    {OFFICE.address}, {OFFICE.neighborhood}
                                    <br />
                                    {OFFICE.city} - {OFFICE.state}, {OFFICE.zip}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Clock size={14} />
                                {OFFICE.hours}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-text mb-3">Links</h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href={OFFICE.mapLinkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-text-secondary hover:text-text transition-colors"
                            >
                                <ExternalLink size={12} />
                                Ver no mapa
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-border text-center">
                    <p className="text-xs text-text-muted">
                        © {new Date().getFullYear()} {DOCTOR.name} — {DOCTOR.specialty}.
                        Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
