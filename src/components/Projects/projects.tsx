import { Github, Youtube, Gamepad, ExternalLink, LucideIcon } from "lucide-react";

type Project = {
  name: string;
  href: string;
  icon: LucideIcon;
  event: string;
  description: string;
  notes?: { text: string; href?: string }[];
};

const projects: Project[] = [
  {
    name: "FlockFindr",
    href: "https://flock-findr.vercel.app",
    icon: ExternalLink,
    event: "GeeseHacks 2025",
    description: "Tracks venue occupancy in real time using Bluetooth signal strength.",
    notes: [
      { text: "Winner" },
      { text: "Presented @ Socratica Symposium 2025" },
      { text: "Featured by MappedIn", href: "https://www.mappedin.com/resources/blog/flockfindr-mapping-foot-traffic-with-bluetooth-and-geese/" },
    ],
  },
  {
    name: "LooGuessr",
    href: "https://github.com/HTN-2024-LooGuessr/LooGuessr",
    icon: Github,
    event: "Hack the North 2024",
    description: "A social app that helps UWaterloo first-years get to know campus.",
    notes: [{ text: "Winner" }, { text: "API Category" }],
  },
  {
    name: "UberBike",
    href: "https://youtu.be/hoDG4Qn-7Ug",
    icon: Youtube,
    event: "Uber Global Hackathon",
    description: "Analysis of where Uber could launch e-bikes, using Python and Folium.",
    notes: [{ text: "International qualifier out of 2,500+ competitors" }],
  },
  {
    name: "Rocket Lander",
    href: "https://github.com/NamanBiyani06/RocketLander",
    icon: Gamepad,
    event: "Design Project",
    description: "A browser game built in Godot, as an exercise in game design.",
  },
];

const linkClass = "underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out";

export default function Projects() {
  return (
    <div className="px-2 pt-8 pb-8">
      <div className="text-lg mb-6"><span className="underline decoration-2 underline-offset-4 decoration-pink-400/60">Projects</span></div>

      <div className="space-y-7">
        {projects.map(({ name, href, icon: Icon, event, description, notes }) => (
          <div key={name} className="text-sm leading-relaxed">
            <div className="flex items-baseline flex-wrap gap-x-2">
              <a href={href} target="_blank" rel="noopener noreferrer" className={`text-base ${linkClass} decoration-blue-400/30 hover:decoration-blue-400`}>
                {name}
              </a>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} link`} className="self-center text-gray-400 hover:text-blue-400 transition-colors duration-300 ease-in-out">
                <Icon size={12} />
              </a>
              <span className="text-gray-500 dark:text-gray-400">· {event}</span>
            </div>
            <p className="mt-1 text-balance">{description}</p>
            {notes && (
              <p className="mt-1 text-balance text-gray-500 dark:text-gray-400">
                {notes.map((note, i) => (
                  <span key={note.text}>
                    {i > 0 && " · "}
                    {note.href ? (
                      <a href={note.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} decoration-gray-400/30 hover:decoration-gray-400`}>{note.text}</a>
                    ) : note.text}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
