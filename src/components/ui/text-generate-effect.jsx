"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes
import { cn } from '../../utils/cn';

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef(null); // Ref to monitor the container
  const [isInView, setIsInView] = useState(false); // State to track if in view
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-x-2">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-white opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-container dark:text-white text-black text-3xl  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
TextGenerateEffect.propTypes = {
  words: PropTypes.string.isRequired, // words is a required string
  className: PropTypes.string, // className is an optional string
  filter: PropTypes.bool, // filter is an optional boolean
  duration: PropTypes.number, // duration is an optional number
};
