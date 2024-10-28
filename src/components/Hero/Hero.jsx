import React from 'react';
import './Hero.scss'
import scroll from '../Assets/scroll.png';
import {motion} from 'framer-motion';


export default function Hero() {

    function handleClick() {
 window.location.href = 'https://www.example.com';
}
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
    duration:2,
    repeat:Infinity
}
        }
    }

    const slidervariant={
        initial:{
             x:0,
            
           
        },
         animate:{
            
            x:"-900%",
           
            transition: {

               repeat:Infinity,
               repeatType:"mirror",
                duration:60,
            }
        }
    }

 
  return (
    <div className="Hero">
      <div className="man"></div>
      <div className="wrapper">
     <motion.a href="#CONTACT" className="button-download"  variants={textvariants}
          initial="initial"
          animate="animate">
  <motion.button>
    Contact me
  </motion.button>
</motion.a>
        <motion.div
          className="texthero"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariants}>Hello,I'm Roshan</motion.h2>

          <motion.h1 variants={textvariants}>Frontend Developer </motion.h1>

         
        
          <motion.img
            src={scroll}
            variants={textvariants}
            animate="scrollButton"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingtext"
        variants={slidervariant}
        initial="initial"
        animate="animate"
      >
        Developer Kannada-Writer Coder React-Lover
      </motion.div>

      <div className="spinner">
        <div className="spinner1" />
      </div>
    </div>
  );
}
