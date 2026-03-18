"use client";

import { useEffect, useState } from "react";

export default function CoffeeScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const coffeeLevel = 100 - progress * 90;
  const steamOpacity = Math.max(0, 1 - progress * 1.2);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 hidden sm:block pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="48"
        height="56"
        viewBox="0 0 72 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Steam */}
        <g opacity={steamOpacity}>
          <rect x="18" y="12" width="2.5" height="9" rx="1.25" fill="#a88050" fillOpacity="0.4" className="steam-wisp" />
          <rect x="24" y="14" width="2.5" height="7" rx="1.25" fill="#a88050" fillOpacity="0.3" className="steam-wisp" style={{ animationDelay: "0.5s" }} />
          <rect x="30" y="12" width="2.5" height="9" rx="1.25" fill="#a88050" fillOpacity="0.35" className="steam-wisp" style={{ animationDelay: "1s" }} />
        </g>

        {/* Rim */}
        <rect x="8" y="24" width="34" height="5" rx="2.5" fill="#8b6340" />

        {/* Body */}
        <rect x="10" y="27" width="30" height="38" rx="4" fill="#5a3f28" />

        {/* Inner */}
        <rect x="13" y="30" width="24" height="32" rx="2" fill="#2a1e14" />

        {/* Coffee */}
        <clipPath id="c">
          <rect x="13" y="30" width="24" height="32" rx="2" />
        </clipPath>
        <rect
          x="13"
          y={30 + 32 * (1 - coffeeLevel / 100)}
          width="24"
          height={32 * coffeeLevel / 100}
          fill="#6e4e33"
          clipPath="url(#c)"
          className="transition-all duration-300 ease-out"
        />
        <rect
          x="15"
          y={30 + 32 * (1 - coffeeLevel / 100)}
          width="20"
          height="2"
          rx="1"
          fill="#a88050"
          clipPath="url(#c)"
          className="transition-all duration-300 ease-out"
        />

        {/* Handle */}
        <path d="M40 36 C50 36 50 58 40 58" stroke="#5a3f28" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
