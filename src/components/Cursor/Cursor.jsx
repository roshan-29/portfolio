import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './Cursor.scss';

const Cursor = () => {
  // Initialize motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update motion values directly
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Add mousemove listener
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    />
  );
};

export default Cursor;
