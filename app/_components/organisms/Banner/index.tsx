import { useContext } from "react";
import { Audiophile, Burger, CartButton } from "@/_components/atoms";
import { PagesLinks } from "@/_components/molecules";
import { CommonProps } from "@/_components/types";
import { ModalContext } from "@/_context/Modal";
import "./banner.scss";

const Banner = ({ className = "" }: CommonProps) => {
  const {
    toggleModal,
    modal: { categories, cart },
  } = useContext(ModalContext);

  const toggleBurgerModal = () => toggleModal("categories");
  const toggleCartModal = () => toggleModal("cart");

  return (
    <div className={`${className} banner flex items-center`}>
      <div className="banner__content flex items-center content-space-between">
        <Burger onClick={toggleBurgerModal} isOpen={categories} />
        <Audiophile />
        <PagesLinks className="banner__pages-links" />
        <CartButton onClick={toggleCartModal} isOpen={cart} />
      </div>
    </div>
  );
};

export default Banner;
