"use client";

import { useState } from "react";

const styles = [
  { className: "font-mono", label: "mono" },
  { className: "font-serif italic", label: "serif" },
  { className: "font-hand", label: "hand" },
  { className: "font-pixel text-[0.72em]", label: "pixel" },
];

const tilts = ["rotate-0", "-rotate-1", "rotate-1", "rotate-0"];

export default function Name() {
  const [i, setI] = useState(0);
  const style = styles[i % styles.length];

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setI((v) => v + 1)}
        className={`${style.className} ${tilts[i % tilts.length]} inline-block cursor-pointer select-none text-3xl transition-transform duration-200 hover:scale-[1.03] active:scale-95`}
        aria-label="Naman Biyani — click to change style"
        title="click me"
      >
        naman biyani
      </button>
      <span
        aria-hidden
        className="font-hand text-muted absolute -right-2 -top-4 hidden translate-x-full text-base sm:inline-block"
      >
        <svg
          className="mr-1 inline-block h-4 w-6 -scale-x-100"
          viewBox="0 0 40 24"
          aria-hidden
        >
          <path
            className="squiggle"
            d="M37 4 C28 20, 16 22, 3 14 M10 10 l-7 4 6 5"
          />
        </svg>
        click me!
      </span>
    </span>
  );
}
