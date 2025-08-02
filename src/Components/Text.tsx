import React from "react";

interface ComponentNameProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const ComponentName: React.FC<ComponentNameProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <div id={id} className={`font-primary ${className}`}>
      {children}
    </div>
  );
};

export default ComponentName;
