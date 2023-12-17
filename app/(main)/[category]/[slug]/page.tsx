import { ProductDetailTemp } from "@/_components/templates";
import { getProductBySlug } from "@/lib/products";
import products from "@/lib/products.json";

type ProductProps = Record<"params", { slug: string }>;

export const generateStaticParams = () =>
  products.map(({ slug }) => ({ slug }));

const Product = ({ params: { slug } }: ProductProps) => {
  const product = getProductBySlug(slug);

  return <ProductDetailTemp product={product} />;
};

export default Product;
