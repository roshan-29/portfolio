"use client";
import React from "react";
import { PinContainer } from "./components/ui/3d-pin";
import './components/ui/Timeline.scss'
export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Live Demo"
        href="https://github.com/roshan-29"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3
            className="heading"
          >
           Internship Project
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="content-pin ">
            React JS + Rapid API + Node JS 
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

export function AnimatedPinDemo2() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Git Hub"
        href="https://github.com/roshan-29/Pet-Shop-Management--DBMS-project"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="heading">DBMS Project</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="content-pin ">
             HTML + JS + CSS + PHP + SQL + XAMPP
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

export function AnimatedPinDemo3() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Git Hub"
        href="https://github.com/roshan-29/vijay_mania"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="heading">Web Project</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="content-pin ">HTML + CSS + JS + PHP + SQL</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

export function AnimatedPinDemo4() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Live Demo"
        href="https://mastercodes.netlify.app"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="heading">React.js Project</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="content-pin ">
             React JS + Tailwind CSS 
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

export function AnimatedPinDemo5() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Git Hub"
        href=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="heading">Major Project</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="content-pin ">
             Flutter + Supabase + Figma
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}