import React from 'react'
import { LampDemo } from '../../project-screen'
import { TextHoverEffect } from "../ui/text-hover-effect";
import './Project.scss'
import { BackgroundBeamsDemo } from '../../backgroundbeams';
export default function Projects() {
  return (
    <div>
      <div className="lamps">
        <LampDemo />
        <div className="cl">
        <div  className="text-2" 

          
         >
        <TextHoverEffect text="Every Line of Code Tells a Story. Discover Mine!" />
      </div>
             <div className="h-[7rem] flex  justify-center ">
         
          <TextHoverEffect text="👨🏼‍💻" />
        </div>
        </div>
      </div>
     
      <div className="cl2">
       <BackgroundBeamsDemo />
      </div>
    </div>
  );
}
