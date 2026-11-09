"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";

import type { HomePhoto } from "../api/home-content";

type PhotoCarouselProps = {
  photos: HomePhoto[];
};

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const count = photos.length;

  useEffect(() => {
    if (paused || count < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [count, paused]);

  useEffect(() => {
    photos.forEach((photo) => {
      const image = new window.Image();
      image.src = photo.url;
    });
  }, [photos]);

  if (count === 0) {
    return <p className="px-6 py-10 text-sm text-muted">Noch keine Fotos.</p>;
  }

  function show(next: number) {
    const wrapped = (next + count) % count;
    setIndex(wrapped);
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    const point = event.changedTouches[0];
    if (!point) {
      return;
    }
    touchStart.current = { x: point.clientX, y: point.clientY };
    setPaused(true);
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStart.current;
    const point = event.changedTouches[0];
    touchStart.current = null;
    setPaused(false);
    if (!start || !point || count < 2) {
      return;
    }

    const deltaX = point.clientX - start.x;
    const deltaY = point.clientY - start.y;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    show(deltaX < 0 ? index + 1 : index - 1);
  }

  return (
    <div
      className="relative w-full touch-pan-y overflow-hidden h-auto min-[526px]:px-16 lg:h-auto lg:min-h-0 lg:flex-1 lg:px-0"
      role="region"
      aria-roledescription="Karussell"
      aria-label="Fotos aus dem Training"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => {
        touchStart.current = null;
        setPaused(false);
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {photos.map((item) => (
          <div key={item.id} className="w-full shrink-0">
            <img src={item.url} alt="" loading="eager" decoding="async" className="h-auto w-full" />
          </div>
        ))}
      </div>
      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Vorheriges Foto"
            onClick={() => show(index - 1)}
            className="absolute top-1/2 left-3 hidden size-10 -translate-y-1/2 items-center justify-center bg-ink/80 text-white min-[526px]:flex"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Nächstes Foto"
            onClick={() => show(index + 1)}
            className="absolute top-1/2 right-3 hidden size-10 -translate-y-1/2 items-center justify-center bg-ink/80 text-white min-[526px]:flex"
          >
            <Chevron direction="right" />
          </button>
        </>
      ) : null}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {photos.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Foto ${itemIndex + 1} von ${count}`}
            aria-current={itemIndex === index ? "true" : undefined}
            onClick={() => show(itemIndex)}
            className={itemIndex === index ? "size-2 rounded-full bg-white" : "size-2 rounded-full bg-white/45"}
          />
        ))}
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path
        d={direction === "left" ? "M10 3 L5 8 L10 13" : "M6 3 L11 8 L6 13"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
