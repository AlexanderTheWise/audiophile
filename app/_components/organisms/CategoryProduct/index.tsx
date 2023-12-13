import { Product, ProductOverview } from "@/app/models/Product";
import { ResponsiveImageDetail } from "../../atoms";
import {
  QuaternaryProductOverview,
  TerciaryProductOverview,
} from "../../molecules";
import { CommonProps } from "../../types";

type CategoryProductProps = Record<"product", Product> & CommonProps;

const CategoryProduct = ({
  product: { categoryImage, category, slug, name, description, new: isNew },
  className = "",
}: CategoryProductProps) => {
  const productOverview: ProductOverview = {
    name,
    description,
    slug: `${category}/${slug}`,
  };

  return (
    <ResponsiveImageDetail
      className={className}
      image={categoryImage}
      name={name}
    >
      {isNew ? (
        <TerciaryProductOverview productOverview={productOverview} />
      ) : (
        <QuaternaryProductOverview productOverview={productOverview} />
      )}
    </ResponsiveImageDetail>
  );
};

export default CategoryProduct;
