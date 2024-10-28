"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative h-[40rem] w-full rounded-md flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-3" />

     
       
      </div>
   
  );
}
