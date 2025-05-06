import Image from "next/image";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-between items-center w-full h-full sm:flex-col">
      <div className="w-full h-full">
        <Image src={"/authPic/auth-pic.jpg"} alt="auth-pic" fill />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default layout;
