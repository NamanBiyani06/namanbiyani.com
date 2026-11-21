"use client";

import { Analytics } from "@vercel/analytics/next";
// import { Metadata } from "next";
import Header from "@/components/Header/header";
import Intro from "@/components/Intro/intro";
// import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/Footer/footer";

// export const metadata: Metadata = {
//   title: 'Naman Biyani'
// };

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative mx-4 md:mx-auto my-4 md:my-28 max-w-lg md:space-y-4">
        <Header/>
        {/* <Navbar/> */}
        <Intro/>
        {/* <Experience/> */}
        <Projects/>
        <Footer/>
        <Analytics/>
      </div>
    </div>
  );
}
