"use client";

import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { Tangerine } from "next/font/google";
import { Github, FileTextIcon, Linkedin, BookOpen, Twitter } from "lucide-react";


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
  return (
    <div className={``} data-aos="fade-up">
      <div className="text-2xl py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 px-4 my-2 grid grid-cols-3">
        <span className="col-span-1">Naman Biyani</span>
        <span></span>
        <span className="text-right col-span-1 flex justify-center items-center">
          <div className="flex gap-4 text-sm justify-center items-center">
            <a href="https://github.com/NamanBiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-300">
              <Github className="" size={20} />
            </a>
            <a href="https://www.goodreads.com/user/show/162046557-naman-biyani" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-300">
              <FileTextIcon className="" size={20} />
            </a>
            <a href="https://www.goodreads.com/user/show/162046557-naman-biyani" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-300">
              <BookOpen className="" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naman-biyani-361b96233/" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-300">
              <Linkedin className="" size={20} />
            </a>
            <a href="hhttps://x.com/nbiyani06" target="_blank" rel="noopener noreferrer" className="flex items-center transform transition-transform ease-in-out duration-300 hover:scale-125 hover:text-gray-300">
              <Twitter className="" size={20} />
            </a>
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