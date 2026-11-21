"use client";

import React from "react";
import { Tangerine } from "next/font/google";
import { Github, Linkedin, BookOpen, Twitter } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider/theme-provider";

export const tangerine = Tangerine({
  style: ["normal"],
  weight: "400",
  preload: false,
});

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <div className={``}>
      <div className="text-xl sm:text-2xl px-2 pt-2 pb-3 mb-3 flex items-center justify-between gap-4 border-b border-gray-300 dark:border-gray-700">
        <span className="whitespace-nowrap">Naman Biyani</span>
        <span className="flex justify-end">
          <div className="flex gap-3 sm:gap-4 text-sm justify-center items-center text-gray-500 dark:text-gray-400">
            <a href="https://github.com/NamanBiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125 hover:text-foreground">
              <Github size={18} />
            </a>
            <a href="https://www.goodreads.com/user/show/162046557-naman-biyani" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125 hover:text-foreground">
              <BookOpen size={18} />
            </a>
            <a href="https://www.linkedin.com/in/naman-biyani-361b96233/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125 hover:text-foreground">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/nbiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125 hover:text-foreground md:flex">
              <Twitter size={18} />
            </a>
            <a href="https://se-webring.xyz/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125 opacity-60 hover:opacity-100 md:flex">
              <Image src="/assets/logo_b.png" alt="Webring Logo" width={60} height={60} className="w-6 h-4 dark:hidden"/>
              <Image src="/assets/logo_w.png" alt="Webring Logo" width={60} height={60} className="w-6 h-4 hidden dark:block"/>
            </a>

            {/* Icon visibility is driven purely by the .dark class so the
                server and client render identical HTML (no hydration
                mismatch) — the pre-paint script picks the initial theme. */}
            <button
              onClick={toggleTheme}
              className="relative w-6 h-6 flex items-center justify-center hover:scale-125"
              aria-label="Toggle theme"
            >
              {/* Sun Icon — visible in light mode */}
              <div className="absolute transition-all duration-500 ease-in-out opacity-100 rotate-0 scale-100 dark:opacity-0 dark:-rotate-90 dark:scale-75">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5"/>
                  <g className="origin-center" style={{animationDuration: '20s'}}>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>

              {/* Moon Icon — visible in dark mode */}
              <div className="absolute transition-all duration-500 ease-in-out opacity-0 rotate-90 scale-75 dark:opacity-100 dark:rotate-0 dark:scale-100">
                <svg
                  className="w-5 h-5 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </div>
            </button>
          </div>
        </span>
      </div>

      <div className={`px-2 text-lg`}>
        <span className="font-medium">Computer Science</span> @ the University of Waterloo
        {/* <AtSign className="inline-block mx-2" size={16}/> */}
      </div>
    </div>
  );
}
