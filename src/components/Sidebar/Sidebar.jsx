import React, { useState } from 'react'
import './Sidebar.scss'
import ToggleButton from './toggleButton/toggleButton'
import Links from './Links/Links'
import { motion }from 'framer-motion'

export default function Sidebar() {
const [open,setOpen]=useState(false);
  const variants ={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay:1,
        type:"spring",
        stiffness:400,
        damping:40
      }
    }
    
   
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
    <motion.div className="bg" variants={variants} >
<Links/>
    </motion.div>
   <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
