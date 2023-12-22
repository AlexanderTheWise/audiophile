import Cart from "../Cart";
import "./cart-slide.scss";

type CartSlideProps = {
  isOpen: boolean;
};

const CartSlide = ({ isOpen }: CartSlideProps) => {
  return (
    <div
      aria-labelledby=""
      id="cart-slide"
      className={`cart-slide${isOpen ? "--open" : ""} position-absolute`}
    >
      <Cart />
    </div>
  );
};

export default CartSlide;
