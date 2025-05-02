/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight, UserCircle2Icon } from "lucide-react";
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
      <Card className="w-[383px] h-[454px] shadow-none p-0 bg-transparent border-none flex flex-col items-center justify-center gap-2 hover:scale-97 duration-300 transition-all">
        <CardHeader className="rounded-[12px] w-full h-full p-0 m-0">
          <Image
            src={Images}
            alt={Title}
            width={383}
            height={255}
            className="w-[383px] h-[255px] object-fill rounded-[12px]"
          />
        </CardHeader>
        <CardContent className="w-[383px] h-[199px] rounded-[12px] bg-[#DDDDDD] px-4 py-3">
          <CardTitle className="font-bold text-[32px]">{Title}</CardTitle>
          <CardDescription className="text-2xl font-normal text-black flex mb-2 items-end">
            {Des}
            <span>
              <MoveRight />
            </span>
          </CardDescription>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2.5">
              <UserCircle2Icon />
              <p className="text-base text-black font-normal">{Author}</p>
            </div>
            <p className="font-medium text-base">200👍 120px👎</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TopBlogCard;
