/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface ITopBlogCardProps {
  Image: string;
  Title: string;
  Des: string;
  Id?: number;
}

const TopBlogCard: React.FC<ITopBlogCardProps> = ({ Image, Title, Des }) => {
  return (
    <Link href={"/"}>
      <Card className="w-[368px] h-[770px] bg-[#BCD8FF] px-9 pt-7 rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-97 duration-300 transition-all">
        <CardHeader className="rounded-2xl w-[280px] h-[470px]">
          <img
            src={Image}
            alt={Title}
            className="w-[280px] h-[470px] object-fill rounded-2xl"
          />
        </CardHeader>
        <CardContent className="mb-2.5">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="font-medium text-4xl">{Title}</CardTitle>
            <p>⭐⭐</p>
          </div>
          <CardDescription className="text-2xl font-normal">
            {Des}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center gap-2">
          <p className="font-medium text-base">200👍 120px👎</p>
          <Button className="text-base cursor-pointer font-light text-black bg-[#64FFDA] w-[120px] h-[34px] rounded-2xl hover:bg-[#25B492] hover:shadow-md transition-all duration-400 ease-in-out">
            Read more...
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TopBlogCard;
