import React from "react";

interface ButtonProps {
  id?: string;
  type?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  id,
  type = "primary",
  className = "",
  children,
}) => {
  const typeClasses: Record<"primary" | "secondary", string> = {
    primary:
      "bg-gradient-to-r from-[#FFBC4C] via-white to-[#FFBC4C] text-tertiary",
    secondary: "bg-transparent border border-white text-white",
  };

  return (
    <button
      id={id}
      className={`cursor-pointer text-base rounded-full px-0.5 py-0.5 font-primary font-bold transition-all duration-200 ${typeClasses[type]} ${className}`}
    >
      <div className="bg-primary rounded-full px-5 py-3">{children}</div>
    </button>
  );
};

export default Button;
