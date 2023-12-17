import { CategoryTemp } from "@/_components/templates";
import { getProductsByCategory } from "@/lib/products";

type CategoryProps = Record<"params", { category: string }>;

export const generateStaticParams = async () => [
  { category: "headphones" },
  { category: "speakers" },
  { category: "earphones" },
];

const Category = ({ params: { category } }: CategoryProps) => {
  const products = getProductsByCategory(category);

  return <CategoryTemp products={products.reverse()} />;
};

export default Category;
