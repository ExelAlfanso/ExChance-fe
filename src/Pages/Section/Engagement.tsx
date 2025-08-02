import React from "react";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import BorderedImage from "../../Components/BorderedImage";

interface EngagementProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Engagement: React.FC<EngagementProps> = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`flex flex-col items-center justify-center bg-primary font-semibold ${className} px-10 mb-14 lg:mb-64`}
    >
      <div className="gap-2 mb-5 text-center lg:mb-16">
        <Heading level={4} className="inline mr-2">
          Start from
        </Heading>
        <Heading level={4} className="inline text-tertiary">
          Anywhere, Anytime
        </Heading>
      </div>
      <BorderedImage
        id="engagement picture"
        href="engagement.png"
        className="mb-5 lg:mb-16"
      ></BorderedImage>
      <Button type="primary">Get Started</Button>
      {children}
    </div>
  );
};

export default Engagement;
