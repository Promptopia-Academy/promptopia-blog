import { Button } from "@/components/ui/button";
import React from "react";

interface IBigArticleProps {
  title: string;
}

const BigArticle: React.FC<IBigArticleProps> = ({ title }) => {
  return (
    <div
      className={`w-[536px] h-[475px] bg-[url(/images/large-article.png)] bg-cover bg-center rounded-2xl flex flex-col justify-between mt-16`}
    >
      <p className="m-5 text-3xl leading-9 w-96 text-white font-light font-['Roboto']">
        {title}
      </p>
      <Button className="bg-primary text-black  rounded-2xl m-6 w-max p-4 flex justify-center items-center text-[16px] ml-auto">
        Read more...
      </Button>
    </div>
  );
};

export default BigArticle;
