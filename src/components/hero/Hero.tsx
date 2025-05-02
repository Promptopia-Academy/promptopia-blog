import React from "react";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <div className="w-full flex justify-between my-7">
      <div className="mt-16">
        <HeroText />
      </div>
      <div className="w-full">
        <HeroImages />
      </div>
    </div>
  );
};

export default Hero;
