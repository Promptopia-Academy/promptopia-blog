import Image from "next/image";
import React from "react";

interface LogoProps {
  title?: boolean;
}

const Logo: React.FC<LogoProps> = ({ title = false }) => {
  return (
    <div className="flex items-center gap-[18px]">
      <div className="w-14 h-14 relative ">
        <Image
          src={"/logo/Logo.svg"}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {title && <span className="text-2xl font-semibold">PROMPTOPIA</span>}
    </div>
  );
};

export default Logo;
