import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITopBlogCardProps {
  Images: string;
  Title: string;
  Des: string;
  Id?: number;
  Author: string;
}

const TopBlogCard: React.FC<ITopBlogCardProps> = ({
  Images,
  Title,
  Des,
  Author,
}) => {
  return (
    <Link href={"/"}>
      <Card className="flex-shrink-0 w-96 h-[28.815rem] shadow-none p-0 bg-transparent border-none flex flex-col items-center justify-center gap-2 hover:scale-97 duration-300 transition-all">
        <CardHeader className="rounded-[12px] w-full h-full p-0 m-0">
          <div className="relative w-96 h-64 object-cover  rounded-2xl">
            <Image src={Images} alt={Title} fill />
          </div>
        </CardHeader>
        <CardContent className="w-96 h-max rounded-2xl bg-card px-4 py-3">
          <CardTitle className="font-bold text-3xl mb-2 leading-9">
            {Title}
          </CardTitle>
          <div className="flex items-end gap-1">
            <CardDescription className="text-2xl font-normal text-foreground flex mb-2 w-[17rem]">
              {Des}
            </CardDescription>
            <Image
              src={"/icons/Right-1.svg"}
              alt="right"
              width={20}
              height={20}
              className="mb-2.5"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2.5">
              <div className="w-10 h-10 relative">
                <Image src={"/icons/pfp.svg"} alt="pfp" fill />
              </div>
              <p className="text-base text-foreground font-normal">{Author}</p>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Image
                  src={"/icons/Like.svg"}
                  alt="like"
                  width={20}
                  height={20}
                />
                <p className="text-base text-foreground font-normal">200</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src={"/icons/Dislike.svg"}
                  alt="dislike"
                  width={20}
                  height={20}
                />
                <p className="text-base text-foreground font-normal">120</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TopBlogCard;
