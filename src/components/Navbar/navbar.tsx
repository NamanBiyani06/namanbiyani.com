import { SquareArrowOutUpRight } from "lucide-react";


export default function Navbar() {
  return (
    <div className="grid grid-cols-4 w-full px-2 py-4">
      {/* <div className="text-center">Github 
        <span className="inline-block translate-y-15">
            <SquareArrowOutUpRight className="translate-y-16" size={16}/>
        </span>
      </div> */}
      {/* dawg fix this it's off by two pixels shifted vert */}
      <div className="text-center">Github
        <SquareArrowOutUpRight className="inline-block mx-1" size={16}/>
      </div>
      <div className="text-center">Resume
        <SquareArrowOutUpRight className="inline-block mx-1" size={16}/>
      </div>    
      <div className="text-center">Goodreads
        <SquareArrowOutUpRight className="inline-block mx-1" size={16}/>
      </div>
      <div className="text-center">Linked In
        <SquareArrowOutUpRight className="inline-block mx-1" size={16}/>
      </div>
    </div>
  );
}