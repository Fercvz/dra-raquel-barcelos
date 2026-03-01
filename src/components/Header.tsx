"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { DOCTOR, CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Quando procurar ajuda", href: "#sinais" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Vídeos", href: "#videos" },
    { label: "Consultório", href: "#consultorio" },
    { label: "Contato", href: "#contato" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-open", isOpen);
        return () => document.body.classList.remove("menu-open");
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#DFD0C4]/95 backdrop-blur-md shadow-lg"
                : "bg-[#DFD0C4]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-18 sm:h-20">
                    {/* Logo + Name + CRM */}
                    <a
                        href="#inicio"
                        className="flex items-center gap-3 group"
                        aria-label="Início"
                    >
                        <div>
                            <span className="text-lg sm:text-xl font-extrabold text-text leading-tight block">
                                {DOCTOR.name}
                            </span>
                            <span className="text-xs sm:text-sm text-text-secondary leading-tight block">
                                {DOCTOR.specialty} • {DOCTOR.crm}
                            </span>
                            <span className="hidden sm:block text-[11px] sm:text-xs text-text-muted leading-tight">
                                {DOCTOR.rqeGeriatria} • {DOCTOR.rqePaliativos}
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-3 py-2 text-base font-medium text-text-secondary hover:text-text transition-colors rounded-lg hover:bg-white/50"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={CONTACT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 p-2.5 text-text-secondary hover:text-pink-500 transition-colors rounded-lg hover:bg-white/50"
                            aria-label="Instagram"
                        >
                            <Instagram size={22} />
                        </a>
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-bold rounded-full transition-colors shadow-sm"
                        >
                            <MessageCircle size={16} />
                            WhatsApp
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden p-2 text-text rounded-lg hover:bg-white/50 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-0 top-[72px] bg-cream/98 backdrop-blur-lg z-40"
                    >
                        <nav className="flex flex-col p-6 gap-1" aria-label="Menu mobile">
                            {/* CRM/RQE on mobile */}
                            <div className="mb-3 px-4 py-2 bg-[#F7E9E1] rounded-xl text-xs text-text-secondary">
                                <p className="font-semibold">{DOCTOR.crm}</p>
                                <p>{DOCTOR.rqeGeriatria} • {DOCTOR.rqePaliativos}</p>
                            </div>
                            {NAV_ITEMS.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="py-3 px-4 text-lg text-text hover:text-[#5E483E] hover:bg-[#F7E9E1] rounded-xl transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <hr className="my-3 border-border" />
                            <a
                                href={CONTACT.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="flex items-center gap-3 py-3 px-4 text-text-secondary hover:text-pink-500 rounded-xl transition-colors"
                            >
                                <Instagram size={22} />
                                {CONTACT.instagramHandle}
                            </a>
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="mt-3 flex items-center justify-center gap-2 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-2xl transition-colors shadow-sm"
                            >
                                <MessageCircle size={18} />
                                Falar no WhatsApp
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
