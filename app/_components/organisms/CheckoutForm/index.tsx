"use client";

import { ChangeEvent, useState } from "react";
import {
  FormFieldSet,
  SelectableInput,
  WhiteBox,
  WritableInput,
} from "@/_components/atoms";
import "./checkout.scss";

interface CheckoutInfo {
  name: string;
  email: string;
  telephone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  moneyNumber: string;
  moneyPin: string;
}

const CheckoutForm = () => {
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo>({
    name: "",
    email: "",
    telephone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    moneyNumber: "",
    moneyPin: "",
  });
  const [payDigital, setPayDigital] = useState(false);

  const onCheckoutChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setCheckoutInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onPayDigitalChange = (type: boolean) => {
    setPayDigital(type);
  };

  return (
    <form id="checkout-form" aria-label="checkout form">
      <WhiteBox className="checkout-form">
        <h2 className="checkout-form__title text--uppercase">checkout</h2>

        <FormFieldSet legend="billing details">
          <WritableInput
            value={checkoutInfo.name}
            label="name"
            placeholder="Alexei Ward"
            name="name"
            autoComplete="name"
            onChange={onCheckoutChange}
          />
          <WritableInput
            value={checkoutInfo.email}
            type="email"
            label="email address"
            placeholder="alexei@mail.com"
            name="email"
            autoComplete="email"
            mode="email"
            onChange={onCheckoutChange}
          />
          <WritableInput
            value={checkoutInfo.telephone}
            type="tel"
            label="phone number"
            placeholder="+1 202-555-0136"
            name="telephone"
            autoComplete="tel"
            mode="tel"
            pattern="^\+\d{1,2}\s\d{3}-\d{3}-\d{4}$"
            onChange={onCheckoutChange}
          />
        </FormFieldSet>

        <FormFieldSet
          legend="shipping info"
          className="checkout-form__shipping"
        >
          <WritableInput
            value={checkoutInfo.address}
            label="address"
            placeholder="1137 Williams Avenue"
            name="address"
            autoComplete="shipping street-address"
            onChange={onCheckoutChange}
          />
          <WritableInput
            value={checkoutInfo.zip}
            label="zip code"
            placeholder="10001"
            name="zip"
            autoComplete="postal-code"
            mode="numeric"
            onChange={onCheckoutChange}
          />
          <WritableInput
            value={checkoutInfo.city}
            label="city"
            placeholder="new york"
            name="city"
            autoComplete="address-level2"
            onChange={onCheckoutChange}
          />
          <WritableInput
            value={checkoutInfo.country}
            label="country"
            placeholder="united states"
            name="country"
            autoComplete="country"
            onChange={onCheckoutChange}
          />
        </FormFieldSet>

        <FormFieldSet legend="payment details">
          <div className="flex-col row-gap-8px column-gap-16px checkout-form__payment">
            <span className="text--label text--capitalize text--bold">
              payment method
            </span>
            <div className="flex-col row-gap-16px">
              <SelectableInput
                checked={payDigital}
                label="e-Money"
                name="method"
                onChange={() => onPayDigitalChange(true)}
              />
              <SelectableInput
                checked={!payDigital}
                label="Cash on Delivery"
                name="method"
                onChange={() => onPayDigitalChange(false)}
              />
            </div>
          </div>

          {payDigital && (
            <>
              <WritableInput
                value={checkoutInfo.moneyNumber}
                label="e-Money number"
                placeholder="238521993"
                name="moneyNumber"
                autoComplete="cc-number"
                mode="numeric"
                onChange={onCheckoutChange}
              />

              <WritableInput
                value={checkoutInfo.moneyPin}
                label="e-Money PIN"
                placeholder="6891"
                name="moneyPin"
                mode="numberic"
                onChange={onCheckoutChange}
              />
            </>
          )}
        </FormFieldSet>
      </WhiteBox>
    </form>
  );
};

export default CheckoutForm;
