import { Product } from "../models/Product";
import products from "./products.json";

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((product) => product.category == category);

export const getProductBySlug = (slug: string): Product =>
  products.find((product) => product.slug == slug)!;
