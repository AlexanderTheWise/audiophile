import { CommonButtonProps } from "@/components/types";
import "./buttons.scss";

export const Burger = ({
  isOpen,
  onClick,
  className = "",
}: Omit<CommonButtonProps, "children"> & { isOpen: boolean }) => (
  <button
    id="categories-menu-button"
    aria-label="categories menu"
    aria-expanded={isOpen}
    aria-controls="categories-slide"
    className={`${className} burger flex-col`}
    onClick={onClick}
  >
    <div className="burger__bar"></div>
    <div className="burger__bar"></div>
    <div className="burger__bar"></div>
  </button>
);
