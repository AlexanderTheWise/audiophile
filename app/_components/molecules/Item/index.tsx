import { Item } from "@/models/Product";
import { ParBTrans } from "../../atoms";

type ItemProps = {
  item: Item;
};

const ProductItem = ({ item: { item, quantity } }: ItemProps) => (
  <ParBTrans
    className="item flex text--capitalize column-gap-32px"
    data-testid="item"
  >
    <span className="text--brand"></span>
    {item}
  </ParBTrans>
);

export default ProductItem;
