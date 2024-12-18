"use client";

import Header from "@/components/Header/header";
import Navbar from "@/components/Navbar/navbar";
import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/Footer/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto my-28 max-w-lg space-y-4">
        <Header/>
        <Navbar/>

        <hr className="border-gray-600"></hr>

        <Experience/>

        <hr className="border-gray-600"></hr>

        <Projects/>

        <hr className="border-gray-600"></hr>

        <Footer/>
      </div>
    </div>
  );
}
