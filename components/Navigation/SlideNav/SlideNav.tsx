"use client";

import { KeyboardEvent, useRef, useState } from "react";
import CategoriesCards from "@/components/Navigation/CategoriesCards/CategoriesCards";
import BurgerButton from "@/components/Buttons/BurgerButton/BurgerButton";
import "./slidenav.scss";

const SlideNav = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen((prev) => !prev);
  };

  const onSlideEscape = (event: KeyboardEvent) => {
    if (event.key == "Escape" && buttonRef.current) {
      buttonRef.current.focus();
      setIsOpen(false);
    }
  };

  return (
    <nav role="navigation">
      <BurgerButton isOpen={isOpen} toggleSlide={toggleSlide} ref={buttonRef} />

      <div
        id="categories_slide"
        onKeyUp={onSlideEscape}
        className={`slide${isOpen ? "--open" : ""}`}
      >
        <CategoriesCards />
      </div>
    </nav>
  );
};

export default SlideNav;
