"use client";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const words = `Crafting seamless digital experiences with a passion for modern design and interactive development. From ideation to execution, I bring your vision to life through front-end magic.`;

export  function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
