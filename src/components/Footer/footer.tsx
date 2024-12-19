import { Heart } from "lucide-react";
import { Fira_Code } from "next/font/google";

export const fira = Fira_Code({
  style: "normal",
  weight: "400",
});

export default function Footer() {
  return (
    <div className="text-gray-500 text-sm text-center">

      <div className={`px-2 pb-4 text-md transform transition-transform transition-colours transition-all ease-in-out duration-300 transition-duration-300 hover:text-gray-300 ${fira.className}`}>
        <a href="mailto:nbiyani@uwaterloo.ca">
          nbiyani [at] uwaterloo [dot] ca
        </a>
      </div>

      <div>
        Created with 
        <Heart className="inline-block w-4 mx-1" fill="grey" size={14}/>
        using NextJS & TailwindCSS • Deployed with Vercel
      </div>
      <div>Naman Biyani • 2025</div>
    </div>
  );
}