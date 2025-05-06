import Image from "next/image";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-between items-center w-full h-full sm:flex-col">
      <div className="w-1/2 h-full sm:w-full">
        <Image src={"/authPic/auth-pic.jpg"} alt="auth-pic"
        style={{
          width: '100%',
          height: 'auto',
          objectFit:"cover"
        }}/>
      </div>
      <div className="w-1/2 h-full sm:w-full">{children}</div>
    </div>
  );
};

export default layout;
