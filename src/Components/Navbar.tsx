import React from "react";
import { NavBarDatas } from "../Datas/NavbarData";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Button from "./Button";

interface NavbarProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ id, className, children }) => {
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <nav
      id={id}
      className={`w-full items-right justify-end lg:items-center lg:justify-center bg-primary font-primary text-secondary flex flex-row ${className}`}
    >
      <div className="justify-between hidden w-full py-6 px-15 lg:flex lg:flex-row">
        <img src="logo.png" alt="" />
        <div className="flex gap-16 font-light">
          {NavBarDatas.map((item, index) => (
            <Link key={index} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Button>Get Started</Button>
      </div>
      <div
        className={`bg-primary py-10 top-10 w-full absolute flex flex-col items-center justify-center gap-4 lg:hidden transition-opacity font-semibold ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NavBarDatas.map((item, index) => (
          <Link key={index} to={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <button onClick={handleClick} className="p-5 lg:hidden">
        <Menu className="text-white cursor-pointer"></Menu>
      </button>
      {children}
    </nav>
  );
};

export default Navbar;
