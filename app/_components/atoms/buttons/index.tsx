import { CommonButtonProps, CommonProps } from "@/_components/types";
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

type ButtonPrimaryProps = {
  type?: "button" | "reset" | "submit";
  form?: string;
} & CommonButtonProps;

export const ButtonPrimary = ({
  children,
  className = "",
  ...rest
}: ButtonPrimaryProps) => (
  <button className={`${className} btn--primary`} {...rest}>
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
