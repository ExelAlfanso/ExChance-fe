import React from "react";
import Heading from "../../Components/Heading";
import { featuresDatas } from "../../Datas/FeaturesData";
import FeatureCard from "../../Components/FeatureCard";

interface FeaturesProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Features: React.FC<FeaturesProps> = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`bg-primary ${className} flex flex-col items-center justify-center mb-14 lg:mb-16`}
    >
      <div className="text-center font-semibold mb-5 lg:mb-16">
        <Heading level={5} className="inline lg:block mr-2">
          Unlock the Power of Crypto Trading with
        </Heading>
        <Heading level={5} className="inline lg:block text-tertiary">
          ExChance
        </Heading>
      </div>
      <div className="mx-10 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4">
        {featuresDatas.map((item, index) => (
          <FeatureCard
            key={index}
            label={item.label}
            description={item.description}
            icon={item.icon}
            className={`mb-10  ${
              index === 4 ? "col-span-2 justify-self-center" : ""
            }`}
          ></FeatureCard>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Features;
