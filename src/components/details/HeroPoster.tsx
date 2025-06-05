import Image from "next/image";
import React from "react";

interface HeroPosterProps {
  image?: string;
  title: string;
  subTitle: string;
  author: string;
  pfp?: string;
  likes: number;
  dislikes: number;
  description: string;
}

const HeroPoster: React.FC<HeroPosterProps> = ({
  title,
  subTitle,
  author,
  likes,
  dislikes,
  description,
}) => {
  return (
    <>
      <div className="w-full bg-[url(/images/detail-poster.png)] bg-cover bg-center rounded-2xl h-[575px] py-6 px-5">
        <div className="h-full w-[578px] bg-[#BFBEBE] rounded-2xl p-10">
          <h1 className="text-5xl font-bold w-[425px] mb-6">{title}</h1>
          <p className="text-2xl  w-full mb-20">{subTitle}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2.5">
              <div className="w-14 h-14 relative">
                <Image src={"/icons/pfp.svg"} alt="pfp" fill />
              </div>
              <p className="text-2xl text-foreground font-normal">
                By: {author}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1 justify-center items-center">
                <Image
                  src={"/icons/Like.svg"}
                  alt="like"
                  width={35}
                  height={35}
                />
                <p className="text-base text-foreground font-medium">{likes}</p>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Image
                  src={"/icons/Dislike.svg"}
                  alt="dislike"
                  width={35}
                  height={35}
                />
                <p className="text-base text-foreground font-medium">
                  {dislikes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-11">
        <p className="w-full font-normal text-2xl leading-8 text-foreground whitespace-pre-line">
          {description}
        </p>
      </div>
    </>
  );
};

export default HeroPoster;
