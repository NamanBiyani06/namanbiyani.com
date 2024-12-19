"use client";

import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/Footer/footer";

export default function HomePage() {
  useEffect(() => {
    aos.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 150,
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/*
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent blur-md pointer-events-none z-10"></div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent blur-md pointer-events-none z-10"></div> */}

      <div className="relative mx-auto my-28 max-w-lg space-y-4">
        <Header/>
        {/* <Navbar/> */}
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}
