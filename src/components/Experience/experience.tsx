import { Weight } from "lucide-react";
import { Volkhov } from "next/font/google";
import { Briefcase } from "lucide-react";

const volkhov = Volkhov({ style: 'normal', weight: '400'});

export default function Experience() {
  return (
    <div className={`pt-4 px-2`}>
      <div className="text-2xl mb-6 ml-4 underline decoration-4 decoration-blue-400/60 hover:decoration-8 hover:-translate-y-1 transition transition-all transition-transform duration-300 transition-duration-300 text-2xl text-rightease-in-out" data-aos="fade-up">Experience</div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        <div className="flex flex-col items-center justify-center" data-aos="fade-up">
          <div className="">Ericsson</div>
          <div className="text-gray-400 text-sm">SWE Intern</div>
        </div>
        <div className="text-sm text-justify col-span-2" data-aos="fade-up">Developed a full-stack internal report generation tool for the CloudRAN team to increase data retention, targeted at 3,500+ Ericsson developers and testers.</div>

        <div className="flex flex-col items-center justify-center text-center" data-aos="fade-up">
          <div className="">Ottawa Hospital Research Institute</div>
          <div className="text-gray-400 text-sm">Data Sci. Intern</div>
        </div>
        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">Focusing on large-scale patient data with the goal of validating the Kidney Failure Risk Equation (KFRE). Algorithmically analyzed 2,500+ patient datasets across 50+ dimensions.</div>

        <div className="flex flex-col items-left justify-center text-center" data-aos="fade-up">
          <div className="">FIRST Robotics 8729</div>
          <div className="text-gray-400 text-sm">Software Coordinator</div>
        </div>
        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">Creating readily deployable robotic simulations and trajectories to be built and deployed to the robot. Aided in FIRST World Championship qualification.</div>

        <div className="flex flex-col items-left justify-center text-center" data-aos="fade-up">
          <div className="">City of Ottawa</div>
          <div className="text-gray-400 text-sm">Lifeguard</div>
        </div>
        <div className="text-sm col-span-2 text-justify" data-aos="fade-up">Maintaining a safe swimming environment and guiding children aged 6-18 through swim stroke development.</div>
      </div>
    </div>
  );
}