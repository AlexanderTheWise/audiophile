"use client";

import { Burger } from "@/components/atoms";
import { CategoriesLinks } from "@/components/molecules";
import { CommonProps } from "@/components/types";
import { useState } from "react";
import "./slider-nav.scss";

const SliderNav = ({ className = "" }: CommonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`${className} slider-nav`}>
      <Burger isOpen={isOpen} onClick={toggleIsOpen} />

      <div
        aria-labelledby="categories-menu-button"
        id="categories-slide"
        className={`slider-nav__slide${
          isOpen ? "--open" : ""
        } position-absolute`}
      >
        <CategoriesLinks />
      </div>
    </nav>
  );
};

export default SliderNav;
