import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex justify-around items-center gap-8">
      <Link href="/">
        <p className="text-2xl font-normal">Home</p>
      </Link>

      <Link href="/">
        <p className="text-2xl font-normal">About</p>
      </Link>
      
      <Link href="/">
        <p className="text-2xl font-normal">Blog</p>
      </Link>
    </div>
  );
};

export default FooterLinks;
