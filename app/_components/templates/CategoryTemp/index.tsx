import { Product } from "@/models/Product";
import { WrapperCategory } from "../../atoms";
import { CategoryProduct } from "../../organisms";
import "./category-template.scss";

type CategoryTempProps = Record<"products", Product[]>;

const CategoryTemp = ({ products }: CategoryTempProps) => (
  <WrapperCategory className="category-template">
    {products.map((product) => (
      <CategoryProduct
        className="category-template__product"
        product={product}
        key={product.id}
      />
    ))}
  </WrapperCategory>
);

export default CategoryTemp;
