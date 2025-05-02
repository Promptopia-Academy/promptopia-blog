import Image from "next/image";
import React from "react";

const HeroImages = () => {
  return (
    <div className="flex gap-6 relative bg-[url(/layout/image-9.png)] w-full h-[34rem] bg-cover bg-right bg-no-repeat justify-end mt-10">
      <div className="flex flex-col gap-3.5 items-end">
        <Image
          src={"/images/image1.png"}
          alt="image1"
          width={382}
          height={205}
          className="ml-28"
        />
        <Image
          src={"/images/image2.png"}
          alt="image2"
          width={197}
          height={297}
        />
      </div>
      <div>
        <Image
          src={"/images/image3.png"}
          alt="image3"
          width={279}
          height={475}
        />
      </div>
    </div>
  );
};

export default HeroImages;
