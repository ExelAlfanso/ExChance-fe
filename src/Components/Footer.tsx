import React from "react";
import { ContactDatas, FooterDatas } from "../Datas/FooterData";
import Heading from "./Heading";
import { Link } from "react-router-dom";

interface FooterProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ id, className, children }) => {
  return (
    <footer
      id={id}
      className={`w-full h-full bg-primary font-primary text-secondary flex flex-col items-left justify-left gap-10 ${className} px-10`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="flex flex-row items-center justify-center gap-2">
          <img src="logo.svg" alt="" className="w-25" />
          <Heading>ExChance</Heading>
        </span>
        <div className="flex flex-col w-100 text-left gap-4">
          <p>Stay Connected - Trade Smart - Win Big</p>
          <p>
            This project is for educational and practice purposes only. It is
            not a real financial service or exchange.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <Heading className="text-base font-semibold">NAVIGATION</Heading>
        {FooterDatas.map((item, index) => (
          <Link key={index} to={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="">
        <Heading className="text-base font-semibold">OUR CONTACT</Heading>
        {ContactDatas.map((item, index) => (
          <div key={index} className="flex flex-row">
            <img src={item.icon} alt="" className="mr-[5px] mb-2.5" />
            {item.label}
          </div>
        ))}
      </div>
      {children}
    </footer>
  );
};

export default Footer;
