

export default function Projects() {
  return (
    <div className="px-2 pt-4 pb-4">
      <div className="text-2xl mb-8 text-right mx-6">Projects</div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        <div className="text-sm col-span-2">A full-stack social media application built to familiarize UWaterloo freshmen with their campus and surrounding areas.</div>
        <div className="flex flex-col items-right justify-center text-center">
          <div className="">LooGuessr</div>
          <div className="text-gray-400 text-sm">Hack the North '24</div>
        </div>

        <div className="text-sm col-span-2">A quantitative data science initiative to introduce electric bicycles into potential Uber markets using Python, Numpy, and Folium.</div>
        <div className="flex flex-col items-right justify-center text-center">
          <div className="">UberBike</div>
          <div className="text-gray-400 text-sm">Uber Global Hackathon</div>
        </div>

        <div className="text-sm col-span-2">A published browser game built through Python-based scripting in the Godot Game Engine as an exercise in Game Development and Design.</div>
        <div className="flex flex-col items-right justify-center text-center">
          <div className="">Rocker Lander</div>
          <div className="text-gray-400 text-sm">Design Project</div>
        </div>
      </div>
    </div>
  );
}