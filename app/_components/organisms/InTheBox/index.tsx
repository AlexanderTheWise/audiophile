import { Item } from "@/models/Product";
import { ProductSection } from "../../atoms";
import { ProductItem } from "../../molecules";
import "./in-the-box.scss";

type InTheBoxProps = {
  items: Item[];
};

const InTheBox = ({ items }: InTheBoxProps) => (
  <ProductSection className="in-the-box" sectionTitle="in the box">
    <ul className="flex-col row-gap-8px">
      {items.map((item) => (
        <li key={item.item}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  </ProductSection>
);

export default InTheBox;
