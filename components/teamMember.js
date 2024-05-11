import React from "react";
import Image from "next/image";

const TeamMember = ({ imageSrc, name, description }) => {
  return (
    <div className="flex max-w-[400px] my-10">
      <Image src={imageSrc} className="rounded-full w-[75px] h-[75px]" />
      <div className="flex max-w-[305px] flex-col gap-3 ml-5">
        <h5 className="text-lg md:text-xl">{name}</h5>
        <p className="text-slate-500 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
