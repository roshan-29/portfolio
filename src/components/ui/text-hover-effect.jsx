"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const TextHoverEffect = ({ text, duration }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <radialGradient id="textGradient" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="rgb(225, 25, 165)" />
          <stop offset="100%" stopColor="rgb(85, 13, 202)" />
        </radialGradient>

        <radialGradient id="strokeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="rgb(225, 25, 165)" />
          <stop offset="100%" stopColor="rgb(85, 13, 202)" />
        </radialGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#strokeGradient)"
        strokeWidth="4.5"
        fill="none"
        className="font-[helvetica] font-extrabold text-7xl"
        style={{ opacity: hovered ? 0.7 : 1 }} // You can use this for static opacity changes
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000, opacity: 1 }} // Initial opacity is set to 1
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
          opacity: hovered ? 0.7 : 1, // Animate opacity based on hover state
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};

// Add prop types validation
TextHoverEffect.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
};
