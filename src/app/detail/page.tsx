import HeroPoster from "@/components/details/HeroPoster";
import React from "react";

const page = () => {
  return (
    <main className="bg-[url(/images/bg.png)] bg-cover bg-center h-[100vh] px-[8%] pt-36">
      <HeroPoster />
    </main>
  );
};

export default page;
