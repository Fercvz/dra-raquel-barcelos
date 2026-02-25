"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { VIDEOS_PLACEHOLDER, type VideoItem } from "@/lib/constants";

export default function VideoCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    });

    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

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

    const videos: VideoItem[] = VIDEOS_PLACEHOLDER;

    return (
        <section id="videos" className="py-16 sm:py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10"
                >
                    <div>
                        <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                            Vídeos
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                            Conteúdos para você e sua família
                        </h2>
                        <p className="mt-2 text-text-secondary max-w-lg">
                            Assista a vídeos com orientações e informações importantes sobre
                            geriatria e cuidados paliativos.
                        </p>
                    </div>

                    {/* Desktop nav arrows */}
                    <div className="hidden sm:flex items-center gap-2 mt-4 sm:mt-0">
                        <button
                            onClick={scrollPrev}
                            disabled={!canPrev}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Vídeo anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canNext}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Próximo vídeo"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300 group">
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
                                                <span className="mt-2 text-[10px] text-blue-200">
                                                    [THUMBNAIL]
                                                </span>
                                            </div>
                                        )}
                                        {/* Play overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-blue-600 shadow-lg">
                                                <Play size={20} fill="currentColor" />
                                            </div>
                                        </div>
                                        {/* Category badge */}
                                        <span className="absolute top-3 left-3 text-[10px] font-medium text-blue-700 bg-white/90 px-2.5 py-1 rounded-full">
                                            {video.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-text mb-1 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-xs text-text-secondary line-clamp-2">
                                            {video.description}
                                        </p>
                                        <a
                                            href={video.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            <Play size={14} />
                                            Assistir
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* [VIDEOS_CARROSSEL] — Placeholder notice */}
                <p className="mt-6 text-center text-xs text-text-muted">
                    Os vídeos serão adicionados em breve.
                </p>
            </div>
        </section>
    );
}
