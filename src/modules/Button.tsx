import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  textClass?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  onClick,
  textClass,
}) => {
  return (
    <div
      className={cn(
        "w-36 h-12 bg-accent flex justify-center items-center rounded-2xl",
        className
      )}
      onClick={onClick}
    >
      <p
        className={cn("text-2xl font-normal text-accent-foreground", textClass)}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
