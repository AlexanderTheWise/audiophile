import { WrapperProduct } from "@/_components/atoms";
import { CheckoutForm, Summary } from "@/_components/organisms";
import "./checkout.scss";

const CheckoutTemp = () => (
  <WrapperProduct className="checkout flex-col row-gap-32px">
    <CheckoutForm />
    <Summary />
  </WrapperProduct>
);

export default CheckoutTemp;
