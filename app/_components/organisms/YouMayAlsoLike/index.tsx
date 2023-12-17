import { Other } from "@/models/Product";
import { ProductSection } from "../../atoms";
import "./you-may-like.scss";
import { OtherLink } from "../../molecules";

type YouMayAlsoLikeProps = {
  others: Other[];
};

const YouMayAlsoLike = ({ others }: YouMayAlsoLikeProps) => (
  <ProductSection className="you-may-like" sectionTitle="you may also like">
    <ul className="you-may-like__others flex-col row-gap-56px">
      {others.map((other) => (
        <li key={other.name}>
          <OtherLink other={other} />
        </li>
      ))}
    </ul>
  </ProductSection>
);

export default YouMayAlsoLike;
1;
