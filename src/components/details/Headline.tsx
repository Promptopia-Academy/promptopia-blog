import React from "react";

interface HeadlineProps {
  title: string;
  description: string;
}

const Headline: React.FC<HeadlineProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-11">
      <h2 className="font-medium text-[40px] leading-11">{title}</h2>
      <p className="text-2xl font-normal text-foreground leading-8">
        {description}
      </p>
    </div>
  );
};

export default Headline;
