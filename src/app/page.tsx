"use client";

import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/next";
// import { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/Header/header";
import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/Footer/footer";

// export const metadata: Metadata = {
//   title: 'Naman Biyani'
// };

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
      <Head>
        <title>Naman Biyani - Site</title>
        <meta name="description" content="Naman Biyani's personal portfolio."/>
      </Head>

      <div className="relative mx-auto my-28 max-w-lg space-y-4">
        <Header/>
        {/* <Navbar/> */}
        <Experience/>
        <Projects/>
        <Footer/>
        <Analytics/>
      </div>
    </div>
  );
}
