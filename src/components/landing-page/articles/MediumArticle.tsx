import { Button } from "@/components/ui/button";
import React from "react";

interface IMediumArticleProps {
  title: string;
}

const MediumArticle: React.FC<IMediumArticleProps> = ({ title }) => {
  return (
    <div className="w-[343px] h-[475px] bg-[url(/images/middle-article.png)] bg-cover bg-center rounded-2xl flex flex-col justify-between">
      <p className="m-5 text-3xl leading-9 w-80 text-white font-light font-['Roboto']">
        {title}
      </p>
      <Button className="bg-primary text-black  rounded-2xl m-6 w-max p-4 flex justify-center items-center text-[16px] ml-auto">
        Read more...
      </Button>
    </div>
  );
};

export default MediumArticle;
