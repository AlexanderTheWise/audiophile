import { ProductCart } from "@/store/ProductCart/types";
import { Product } from "../models/Product";
import products from "./products.json";

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((product) => product.category == category);

export const getProductBySlug = (slug: string): Product =>
  products.find((product) => product.slug == slug)!;

export const getTotalPrice = (productCart: ProductCart): number => {
  return Object.values(productCart).reduce(
    (accumulator, { count, price }) => accumulator + count * price,
    0,
  );
};

export const getVat = (totalPrice: number) => {
  return (20 / 100) * totalPrice;
};
