import { forwardRef } from "react";
import "./burgerbutton.scss";

type BurgerMenuProps = {
  isOpen: boolean;
  toggleSlide: () => void;
};

const BurgerButton = forwardRef<HTMLButtonElement, BurgerMenuProps>(
  function BurgerButton({ isOpen, toggleSlide }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="burger-button"
        aria-expanded={isOpen}
        aria-controls="categories_slide"
        onClick={toggleSlide}
      >
        <div className="burger-button__bar"></div>
        <div className="burger-button__bar"></div>
        <div className="burger-button__bar"></div>
      </button>
    );
  },
);

export default BurgerButton;
