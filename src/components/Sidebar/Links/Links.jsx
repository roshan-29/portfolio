import React from 'react'
import './Links.scss'
import {motion} from 'framer-motion'
function Links() {
  const variants={
    open:{
      transition: {
        staggerChildren: 0.1
      }
    },
    closed:{
  transition: {
        staggerChildren: 0.05,
        staggerDirection:-1
      }
    }
  }

  const invariants={
    open:{
     y:0,
     opacity:1,
    },
    closed:{
 y:50,
 opacity: 0
    }
  }
  const items=["HOMEPAGE","SKILLS","PROJECTS","CONTACT"];
  return (
    <motion.div className="links"  variants={variants}>
   
    {items.map((item) => (
<motion.a href ={`#${item}`} key ={item} variants={ invariants} whileHover={{scale:1.1}} whileTap={{scale:0.90}}> {item}</motion.a>
 
    ))}
    </motion.div>
  )
}

export default Links
