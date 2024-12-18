"use client";

import { AtSign } from "lucide-react";

export default function Header() {
  return (
    <div className="">
      <div className="font-playfair text-2xl bg-gradient-to-r from-blue-600 via-pink-500 to-purple-400 px-2 my-2">
        Naman Biyani
      </div>

      <div className="text-gray-400 px-2">
        Software Engineering @ University of Waterloo
        {/* <AtSign className="inline-block mx-2" size={16}/> */}
      </div>
    </div>
  );
}