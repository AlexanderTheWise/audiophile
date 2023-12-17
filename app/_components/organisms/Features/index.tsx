import { ParBTrans, ProductSection } from "../../atoms";

const Features = ({ children }: { children: React.ReactNode }) => (
  <ProductSection sectionTitle="features">
    <ParBTrans>{children}</ParBTrans>
  </ProductSection>
);

export default Features;
