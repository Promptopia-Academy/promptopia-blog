import { Button } from "@/components/ui/button";
import React from "react";

interface ISmallArticleProps {
  title: string;
}

const SmallArticle: React.FC<ISmallArticleProps> = ({ title }) => {
  return (
    <div className="w-64 h-[226px] bg-[url(/images/small-article.png)] bg-cover bg-center rounded-2xl flex flex-col justify-between">
      <p className="m-5 text-3xl leading-9 w-72 text-white font-light font-['Roboto']">
        {title}
      </p>
      <Button className="bg-primary text-black  rounded-2xl m-6 w-max p-4 flex justify-center items-center text-[16px] ml-auto">
        Read more...
      </Button>
    </div>
  );
};

export default SmallArticle;
