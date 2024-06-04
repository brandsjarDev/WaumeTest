// HeartIconTextSection.js
import Image from "next/image";
import heartIcon from "@public/assets/images/heart-icon.png";

const IconText = ({ text, imageUrl = heartIcon }) => {
  return (
    <p className="flex items-center text-slate-500 gap-2 text-xs md:text-base">
      <div className="min-w-[20px]">
        <Image
          src={imageUrl}
          height={10}
          width={20}
          style={{ objectFit: "contain" }}
        />
      </div>
      {text}
    </p>
  );
};

export default IconText;
