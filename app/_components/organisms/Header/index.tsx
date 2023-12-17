"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryHero from "../CategoryHero";
import Banner from "../Banner";
import { Hero } from "..";
import "./header.scss";

const Header = () => {
  const pathname = usePathname();
  const [component, setComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setComponent(<Hero />);
        break;

      case "/headphones":
        setComponent(<CategoryHero category="headphones" />);
        break;

      case "/speakers":
        setComponent(<CategoryHero category="speakers" />);
        break;

      case "/earphones":
        setComponent(<CategoryHero category="earphones" />);
        break;

      default:
        setComponent(null);
    }
  }, [pathname]);

  return (
    <header className="header">
      <Banner className="header__banner position-absolute" />
      {component}
    </header>
  );
};

export default Header;
