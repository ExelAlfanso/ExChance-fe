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
      className={`relative p-[2px] rounded-3xl bg-[linear-gradient(to_right,_#FFBC4C_0%,_#FFF_5%,_#FFF_25%,_#FFF_50%,_#FFBC4C_100%)] ${className}`}
    >
      <div className="relative bg-primary rounded-3xl flex flex-row items-center gap-4 px-6 py-8 overflow-hidden">
        <img src={icon} alt="" className="w-8 lg:w-12 h-auto" />
        <div className="flex flex-col mx-10 leading-relaxed">
          <Heading level={6} className="font-semibold">
            {label}
          </Heading>
          <Heading level={6} className="font-normal">
            {description}
          </Heading>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default FeatureCard;
