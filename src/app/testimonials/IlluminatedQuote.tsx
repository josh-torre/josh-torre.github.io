"use client";

import { QuoteSegment } from "./testimonialData";

type Token = {
  text: string;
  isHighlight: boolean;
  isSpace: boolean;
};

const tokenize = (segments: QuoteSegment[]): Token[] => {
  const tokens: Token[] = [];
  for (const seg of segments) {
    const isHi = seg.type === "highlight";
    const parts = seg.content.split(/(\s+)/);
    for (const p of parts) {
      if (!p) continue;
      tokens.push({
        text: p,
        isHighlight: isHi,
        isSpace: /^\s+$/.test(p),
      });
    }
  }
  return tokens;
};

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);

interface IlluminatedQuoteProps {
  segments: QuoteSegment[];
  progress: number;
}

export const IlluminatedQuote = ({
  segments,
  progress,
}: IlluminatedQuoteProps) => {
  const tokens = tokenize(segments);
  const wordCount = tokens.filter((t) => !t.isSpace).length;

  // The parent remaps frame-local progress into the reveal window then
  // holds at 1.0 for the remainder of the scene, so we spend nearly all of
  // our 0..1 input on the actual word-by-word illumination.
  const revealStart = 0.04;
  const revealEnd = 0.92;
  const span = revealEnd - revealStart;
  const perWord = span / Math.max(1, wordCount);
  const overlap = 2.6; // each word's reveal lasts ~2.6 slots

  let wordIndex = 0;

  return (
    <p className="text-lg sm:text-2xl md:text-[2rem] leading-relaxed md:leading-[1.45] tracking-[-0.01em] font-normal text-white text-balance">
      <span
        aria-hidden="true"
        className="font-serif select-none mr-1 align-[-0.15em] text-[1.2em]"
        style={{
          color: `rgba(255, 255, 255, ${
            0.12 + 0.18 * easeOut(clamp01(progress / 0.08))
          })`,
        }}
      >
        &ldquo;
      </span>
      {tokens.map((t, i) => {
        if (t.isSpace) return <span key={i}>{t.text}</span>;

        const myIndex = wordIndex++;
        const start = revealStart + myIndex * perWord;
        const end = start + perWord * overlap;
        const wp = easeOut(clamp01((progress - start) / (end - start)));

        if (t.isHighlight) {
          const op = 0.22 + 0.78 * wp;
          return (
            <span
              key={i}
              className="font-medium"
              style={{ color: `rgba(255, 255, 255, ${op})` }}
            >
              {t.text}
            </span>
          );
        }

        const op = 0.14 + 0.36 * wp;
        return (
          <span key={i} style={{ color: `rgba(255, 255, 255, ${op})` }}>
            {t.text}
          </span>
        );
      })}
    </p>
  );
};
