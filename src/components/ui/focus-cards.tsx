"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type FocusCardItem = {
  title: string;
  src: string;
  href?: string;
  institution?: string;
  year?: number | string;
  country?: string;
  grantType?: string;
  summary?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: FocusCardItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const CardContent = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-xl relative bg-slate-900 overflow-hidden h-72 md:h-96 w-full transition-all duration-300 ease-out border border-white/10 shadow-lg cursor-pointer group",
          hovered !== null && hovered !== index && "blur-[2px] scale-[0.97] opacity-60"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Persistent subtle top badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          {card.year && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-md">
              {card.year} Award
            </span>
          )}
          {card.country && (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
              {card.country}
            </span>
          )}
        </div>

        {/* Hover overlay with details & title */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-6 transition-all duration-300",
            hovered === index ? "opacity-100" : "opacity-85 md:opacity-75"
          )}
        >
          {card.grantType && (
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-1">
              {card.grantType}
            </span>
          )}
          {card.institution && (
            <div className="text-sm font-semibold text-white/90 mb-1.5 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 shrink-0">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>{card.institution}</span>
            </div>
          )}
          <h3 className="text-base md:text-lg font-bold text-white leading-snug mb-2 line-clamp-2">
            {card.title}
          </h3>
          {card.summary && (
            <p className="text-xs md:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-3">
              {card.summary}
            </p>
          )}
          {card.href && (
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
              <span>Read Full Award Article</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          )}
        </div>
      </div>
    );

    if (card.href) {
      return (
        <a href={card.href} className="block w-full text-inherit no-underline focus:outline-none">
          {CardContent}
        </a>
      );
    }

    return CardContent;
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: FocusCardItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
