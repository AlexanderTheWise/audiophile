import { CommonButtonProps, CommonProps } from "@/app/_components/types";
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

export const ButtonPrimary = ({
  children,
  onClick,
  className = "",
}: CommonButtonProps) => (
  <button className={`${className} btn--primary`} onClick={onClick}>
    {children}
  </button>
);

const Counter = ({ children, onClick, className = "" }: CommonButtonProps) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export const Incrementor = ({
  onClick,
}: Omit<CommonButtonProps, "children">) => (
  <Counter className="counter to-brand" onClick={onClick}>
    +
  </Counter>
);

export const Decrementor = ({
  onClick,
}: Omit<CommonButtonProps, "children">) => (
  <Counter className="counter to-brand" onClick={onClick}>
    -
  </Counter>
);
