import React from "react";
import { NavBarDatas } from "../Datas/NavbarData";
// import Button from "./Button";
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
      className={`items-right justify-end lg:items-center lg:justify-between bg-primary font-primary text-secondary flex flex-row gap-10 ${className}`}
    >
      <div className="gap-16 hidden lg:flex lg:flex-row lg:items-center lg:justify-between">
        <img src="logo.svg" alt="" />
        {NavBarDatas.map((item, index) => (
          <Link key={index} to={item.href}>
            {item.label}
          </Link>
        ))}
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
      <button onClick={handleClick} className="lg:hidden p-5">
        <Menu className="text-white cursor-pointer"></Menu>
      </button>
      {children}
    </nav>
  );
};

export default Navbar;
