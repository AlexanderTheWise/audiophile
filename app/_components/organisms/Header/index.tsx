"use client";

import { usePathname } from "next/navigation";
import Banner from "../Banner";
import { Hero } from "..";
import "./header.scss";

const Header = () => {
  const pathname = usePathname();
  let component: React.ReactNode;

  switch (pathname) {
    case "/":
      component = <Hero />;
      break;

    default:
      component = null;
  }

  return (
    <header className="header">
      <Banner className="header__banner position-absolute" />
      {component}
    </header>
  );
};

export default Header;
