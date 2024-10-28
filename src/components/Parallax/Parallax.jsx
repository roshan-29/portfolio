import React, { useRef } from 'react';
import './Parallax.scss';
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeamsDemo } from '../../backgroundbeams';
import { TextRevealCardPreview } from '../../textreveal'
"use client";





export default function Parallax() {
      const textvariants={
        initial:{
             x:-500,
            opacity: 0
           
        },
         animate:{
            
            x:0,
            opacity: 1,
            transition: {

                duration:1,
                staggerChildren:0.1
            }
        },
        scrollButton:
        {
opacity:0,
y:10,
transition:{
    duration:4,
    repeat:Infinity
}
        }
    }
    const ref = useRef(null);
    
    // Proper usage of useScroll with ref
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
const ybg=useTransform(scrollYProgress,[0,1],["0%","-80%"]);
const ytext=useTransform(scrollYProgress,[0,1],["0%","500%"]);
const yimg=useTransform(scrollYProgress,[0,1],["0%","120%"]);
    return (
        <div ref={ref} className='parallax'>
      
            
                  <motion.div className="textcontainer" style={{y:ytext}}  variants={textvariants} initial="initial" animate="animate">
   
 <motion.h1 style={{y:ytext}}  variants={textvariants} initial="initial" animate="animate"> scroll down!</motion.h1>
  

      
    </motion.div>
           
         <motion.div 
                className="parallax2"
                
      
            />
           <motion.div className="bgg"  variants={textvariants} style={{x:ybg}} initial="initial" animate="animate"><BackgroundBeamsDemo/></motion.div>
         
                       <motion.div 
               className="paralaxstar"
                style={{x:ybg}}
            />
           <motion.div 
                className="parallax3"
                style={{y:yimg}}  variants={textvariants} 
      
            />
          
        </div>
    );
}
