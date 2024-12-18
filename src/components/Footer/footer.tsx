import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-gray-500 text-sm text-center">
      <div>
        Created with 
        <Heart className="inline-block w-4 mx-1" fill="grey" size={14}/>
        using NextJS & TailwindCSS • Deployed with Vercel
      </div>
      <div>Naman Biyani • 2025</div>
    </div>
  );
}