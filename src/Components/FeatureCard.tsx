import React from "react";
import Heading from "./Heading";

interface FeatureCardProps {
  id?: string;
  className?: string;
  label: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  className = "",
  label,
  description,
  icon,
}) => {
  return (
    <div
      id={id}
      className={`relative p-[2px] rounded-3xl bg-[linear-gradient(to_right,_#FFBC4C_0%,_#FFF_5%,_#FFF_25%,_#FFF_50%,_#FFBC4C_100%)] max-w-120 ${className}`}
    >
      <div className="relative flex flex-row gap-8 py-8 overflow-hidden bg-primary rounded-3xl">
        <div className="flex flex-row gap-10 mx-10">
          <img src={icon} alt="" className="w-6 h-auto lg:w-12" />
          <div className="flex flex-col leading-relaxed ">
            <Heading level={7} className="font-semibold">
              {label}
            </Heading>
            <Heading level={7} className="font-normal ">
              {description}
            </Heading>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default FeatureCard;
