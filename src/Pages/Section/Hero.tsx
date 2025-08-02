import React from "react";
import Heading from "../../Components/Heading";
import BorderedImage from "../../Components/BorderedImage";

interface HeroProps {
  id: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ id, className }) => {
  return (
    <div
      id={id}
      className={`bg-primary h-full ${className} px-18 mb-14 lg:mb-16`}
    >
      <div className="flex flex-row items-center justify-center gap-2 lg:gap-5 text-secondary mb-4 lg:mb-16">
        <Heading className="font-bold " level={4}>
          Small
        </Heading>
        <Heading className="" level={4}>
          steps,
        </Heading>
        <Heading className="font-bold" level={4}>
          Big
        </Heading>
        <Heading className="" level={4}>
          impact,
        </Heading>
      </div>
      <BorderedImage id="Hero Image" href="hero.png"></BorderedImage>
    </div>
  );
};

export default Hero;
