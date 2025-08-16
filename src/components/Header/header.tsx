"use client";

import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { Tangerine } from "next/font/google";
import { Github, FileTextIcon, Linkedin, BookOpen, Twitter } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider/theme-provider";

export const dmSerifDisplay = DM_Serif_Display({
  style: ["italic"],
  weight: "400",
  preload: false,
});

export const tangerine = Tangerine({
  style: ["normal"],
  weight: "400",
  preload: false,
});

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={``} data-aos="fade-up">
      <div className="text-2xl py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 px-4 my-2 grid grid-cols-3 rounded-md text-white">
        <span className="col-span-1 text-white">Naman Biyani</span>
        <span className="text-right col-span-2 flex justify-end">
          <div className="flex gap-4 text-sm justify-center items-center">
            <a href="https://github.com/NamanBiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white">
              <Github className="text-white" size={20} />
            </a>
            <a href="/assets/NamanBiyani_2A.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white">
              <FileTextIcon className="text-white" size={20} />
            </a>
            <a href="https://www.goodreads.com/user/show/162046557-naman-biyani" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white">
              <BookOpen className="text-white" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naman-biyani-361b96233/" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white">
              <Linkedin className="text-white" size={20} />
            </a>
            <a href="https://x.com/nbiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white md:flex">
              <Twitter className="text-white" size={20} />
            </a>
            <a href="https://se-webring.xyz/" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-200 text-white md:flex">
              <Image src="/assets/logo_w.png" alt="Webring Logo" width={60} height={60} className="w-6 h-4"/>
            </a>

            <button
              onClick={toggleTheme}
              className="relative w-6 h-6 flex items-center justify-center transform transition-all duration-500 ease-in-out hover:scale-125 hover:text-gray-200 text-white"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {/* Sun Icon */}
              <div className={`absolute transition-all duration-500 ease-in-out ${
                theme === 'light' 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 -rotate-90 scale-75'
              }`}>
                <svg 
                  className="w-5 h-5 text-yellow-300" 
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

              {/* Moon Icon */}
              <div className={`absolute transition-all duration-500 ease-in-out ${
                theme === 'dark' 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 rotate-90 scale-75'
              }`}>
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
        <span className={`${dmSerifDisplay.className}`}>Software Engineering</span> @ University of Waterloo
        {/* <AtSign className="inline-block mx-2" size={16}/> */}
      </div>
    </div>
  );
}