import { ProductCart } from "@/store/ProductCart/types";

export const initialState: ProductCart = {
  [1]: {
    name: "YX1 Wireless Earphones",
    cartImage: "/images/cart/yx1.jpg",
    count: 1,
    price: 200,
  },
  [2]: {
    name: "XX59 Headphones",
    cartImage: "/images/cart/xx59.jpg",
    count: 2,
    price: 300,
  },
};
