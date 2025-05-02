import React from "react";
import { Button } from "../ui/button";

const HeroText = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-6xl font-bold leading-[75.03px] ">PROMPTOPIA</h1>
      <p className="w-80 text-3xl font-light leading-9 mt-4">
        Lorem ipsum in adipiscing tincidunt.Lorem ipsum in adipiscing
      </p>
      <Button className="bg-accent text-2xl font-normal text-foreground mt-8 w-52 h-12">
        Get Started
      </Button>
    </div>
  );
};

export default HeroText;
