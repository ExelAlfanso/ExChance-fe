import React from "react";

interface BorderedImageProps {
  id: string;
  className?: string;
  href: string;
}

const BorderedImage: React.FC<BorderedImageProps> = ({
  id,
  className,
  href,
}) => {
  return (
    <div
      id={id}
      className={` rounded-3xl bg-[linear-gradient(to_right,_#FFBC4C_0%,_#FFF_5%,_#FFF_25%,_#FFF_50%,_#FFBC4C_100%)] ${className}`}
    >
      <img src={href} alt={id} className="border rounded-3xl p-0.5" />
    </div>
  );
};

export default BorderedImage;
