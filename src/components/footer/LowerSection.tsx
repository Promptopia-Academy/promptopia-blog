import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const LowerSection = () => {
  return (
    <div className=" border-t border-[#000] w-full pt-2.5 flex items-center justify-between">
      <div className="flex justify-between items-center gap-8">
        <Link href="/">
          <p className="text-xl font-normal">Privacy and Policy</p>
        </Link>

        <Link href="/">
          <p className="text-xl font-normal">Terms of Service</p>
        </Link>
      </div>
      <SocialLinks />
    </div>
  );
};

export default LowerSection;
