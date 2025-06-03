import React from "react";
import HigherSection from "./HigherSection";
import LowerSection from "./LowerSection";

const Footer = () => {
  return (
    <div className="bg-[#DDDDDD] w-full px-32 pt-11 pb-6 flex flex-col items-center justify-center gap-4">
      <HigherSection />
      <LowerSection />
    </div>
  );
};

export default Footer;
