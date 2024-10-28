"use client";
import React from "react";
import PropTypes from "prop-types";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[30rem] rounded-6xl w-100vh z-50">
      <TextRevealCard
        text="What are my skills,scroll down to see"
        revealText=" From ideation to execution, I bring your vision to life  "
      >
       
      </TextRevealCard>
    </div>
  );
}

// Define prop types for validation
TextRevealCardPreview.propTypes = {
  text: PropTypes.string,
  revealText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
