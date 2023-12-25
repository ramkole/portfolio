import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
const HeaderHero = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="">
          <Image
            src={hero}
            alt="hero"
            width="192"
            height="192"
            quality="75"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderHero;
