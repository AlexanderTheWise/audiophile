import { Decrementor, Incrementor } from "../../atoms";
import { CommonContainerProps } from "../../types";
import "./product-counter.scss";

type ProductCounterProps = {
  decrement: () => void;
  increment: () => void;
} & CommonContainerProps;

const ProductCounter = ({
  children,
  decrement,
  increment,
}: ProductCounterProps) => (
  <div className="product-counter flex content-center items-center column-gap-20px">
    <Decrementor onClick={decrement} />
    <div
      role="region"
      aria-label={`${children} item${(children as number) > 1 ? "s" : ""}`}
      aria-live="assertive"
    >
      {children}
    </div>
    <Incrementor onClick={increment} />
  </div>
);

export default ProductCounter;
