import React from "react";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="w-full flex justify-between my-7">
      <div className="mt-16">
        <HeroText />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
