import { SOCIAL_NETWORK_ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex justify-between items-center gap-7">
      {SOCIAL_NETWORK_ICONS.map((p, i) => (
        <Link href={p.Href} key={i} className="w-12 h-12">
          <Image src={p.Icon} alt={p.Title} width={46} height={46} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
