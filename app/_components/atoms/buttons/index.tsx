import { CommonButtonProps, CommonProps } from "@/_components/types";
import { CartIcon } from "..";
import "./buttons.scss";

type ExpandedButton = {
  isOpen: boolean;
} & Omit<CommonButtonProps, "children">;

export const Burger = ({ isOpen, onClick, className = "" }: ExpandedButton) => (
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

export const CartButton = ({
  isOpen,
  onClick,
  className = "",
}: ExpandedButton) => (
  <button
    id="cart-button"
    aria-label="open the cart"
    aria-expanded={isOpen}
    aria-controls="cart-slide"
    className={`${className} to-brand`}
    onClick={onClick}
  >
    <CartIcon />
  </button>
);

export const TextButton = ({
  children,
  onClick,
  className = "",
}: CommonButtonProps) => (
  <button
    className={`${className} text-btn to-brand text--black-transparent`}
    onClick={onClick}
  >
    {children}
  </button>
);
