import { Github, Youtube, Gamepad } from "lucide-react";

export default function Projects() {
  return (
    <div className="px-2 pt-4 pb-4" data-aos="fade-up">
      <div className="underline decoration-4 decoration-pink-400/60 hover:-translate-y-1 transition transition-all transition-transform duration-300 transition-duration-300 text-2xl mb-8 text-right mx-6 ease-in-out">Projects</div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">
          A full-stack social media application built to familiarize UWaterloo freshmen with their campus and surrounding areas.
          
          <div className="flex items-center text-sm text-gray-400 text-right text-center">Winner @ Hack the North 2024</div>
        </div>
        <div className="flex flex-col items-right justify-center text-center" data-aos="fade-up">
          <a className="transform transition-transform transition-colors transition-all ease-in-out duration-500 transition-duration-500 hover:text-blue-300 hover:scale-105" href="https://github.com/HTN-2024-LooGuessr/LooGuessr">
            LooGuessr
            <span className="inline-block mx-1"><Github className="" size={12}/></span>
          </a>
          <div className="text-gray-400 text-sm">Hack the North 2024</div>
        </div>

        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">
          A quantitative data science initiative to introduce electric bicycles into potential Uber markets using Python, Numpy, and Folium.

          <div className="flex items-center text-sm text-gray-400 text-right text-center">International qualifier out of 2,500+ competitors</div>
        </div>
        <div className="flex flex-col items-right justify-center text-center" data-aos="fade-up">
          <a className="transform transition-transform transition-colors transition-all ease-in-out duration-500 transition-duration-500 hover:text-blue-300 hover:scale-105" href="https://youtu.be/hoDG4Qn-7Ug">
            UberBike
            <span className="inline-block mx-1"><Youtube className="" size={12}/></span>
          </a>
          <div className="text-gray-400 text-sm">Uber Global Hackathon</div>
        </div>

        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">A published browser game built through Python-based scripting in the Godot Game Engine as an exercise in Game Development and Design.</div>
        <div className="flex flex-col items-right justify-center text-center" data-aos="fade-up">
          <a className="transform transition-transform transition-colors transition-all ease-in-out duration-500 transition-duration-500 hover:text-blue-300 hover:scale-105" href="https://github.com/NamanBiyani06/RocketLander">
            Rocket Lander
            <span className="inline-block mx-1"><Gamepad className="" size={12}/></span>
          </a>
          <div className="text-gray-400 text-sm">Design Project</div>
        </div>
      </div>
    </div>
  );
}