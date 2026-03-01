"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { VIDEOS, type VideoItem } from "@/lib/constants";

export default function VideoCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    });

    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanPrev(emblaApi.canScrollPrev());
        setCanNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeVideo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeVideo]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveVideo(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const videos: VideoItem[] = VIDEOS;

    return (
        <>
            <section id="videos" className="py-16 sm:py-24 bg-cream">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center mb-12 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight lg:whitespace-nowrap mb-6">
                            Conteúdos para você e sua família
                        </h2>

                        {/* Desktop nav arrows */}
                        <div className="hidden sm:flex items-center gap-4">
                            <button
                                onClick={scrollPrev}
                                disabled={!canPrev}
                                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Vídeo anterior"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={!canNext}
                                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Próximo vídeo"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-5">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="flex-[0_0_90%] sm:flex-[0_0_55%] lg:flex-[0_0_40%] min-w-0"
                                >
                                    <div
                                        className="bg-white rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                        onClick={() => setActiveVideo(video)}
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-video video-thumb-placeholder">
                                            {video.thumbnailUrl ? (
                                                <img
                                                    src={video.thumbnailUrl}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300">
                                                    <Play size={32} />
                                                </div>
                                            )}
                                            {/* Play overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-blue-600 shadow-lg">
                                                    <Play size={24} fill="currentColor" />
                                                </div>
                                            </div>
                                            {/* Category badge */}
                                            <span className="absolute top-4 left-4 text-xs font-medium text-blue-700 bg-white/90 px-3 py-1.5 rounded-full">
                                                {video.category}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-text mb-2 line-clamp-2">
                                                {video.title}
                                            </h3>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                {video.description}
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                                <Play size={18} />
                                                Assistir
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={() => setActiveVideo(null)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                            aria-label="Fechar vídeo"
                        >
                            <X size={22} />
                        </button>

                        {/* Video container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-[90vw] max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1&rel=0`}
                                title={activeVideo.title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
