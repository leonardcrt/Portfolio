"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

// Affiche une vidéo muette qui se lance seule et tourne en boucle,
// ou une image si aucune vidéo n'est fournie.
export default function Media({
  video,
  image,
  alt,
  sizes,
  className = "object-cover",
}: {
  video?: string;
  image: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );

  // Certains navigateurs (Safari iOS) exigent que "muted" soit posé
  // avant de lancer la lecture automatique : on le force ici.
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    el.muted = true;
    el.play().catch(() => {});
  }, [reducedMotion, video]);

  if (!video || reducedMotion) {
    return <Image src={image} alt={alt} fill sizes={sizes} className={className} />;
  }

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full ${className}`}
      poster={image}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
    >
      {/* MP4 lu par tous les navigateurs courants ; WebM du même nom en secours */}
      <source src={video} type="video/mp4" />
      {video.endsWith(".mp4") && (
        <source src={video.replace(/\.mp4$/, ".webm")} type="video/webm" />
      )}
    </video>
  );
}

export function DocIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}
