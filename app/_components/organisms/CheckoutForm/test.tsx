import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import CheckoutForm from ".";

const renderForm = () => render(<CheckoutForm />);

describe("<CheckoutForm /> component", () => {
  it("should render a form called 'checkout form'", () => {
    const name = "checkout form";
    const { getByRole } = renderForm();

    const form = getByRole("form", { name });

    expect(form).toBeInTheDocument();
  });

  it("should render a level 2 heading called 'checkout'", () => {
    const name = "checkout";
    const level = 2;
    const { getByRole } = renderForm();

    const heading = getByRole("heading", { name, level });

    expect(heading).toBeInTheDocument();
  });

  it("should render three legends for billing details, shipping info, payment details fieldsets", () => {
    const selector = "legend";
    const ids = ["billing details", "shipping info", "payment details"];
    const { getByText } = renderForm();

    ids.forEach((id) => {
      const legend = getByText(id, { selector });

      expect(legend).toBeInTheDocument();
    });
  });

  it("should render seven textboxes that are initially invalid", () => {
    const numOfTextboxes = 7;
    const { getAllByRole } = renderForm();

    const textboxes = getAllByRole("textbox");

    expect(textboxes.length).toBe(numOfTextboxes);

    textboxes.forEach((input) => {
      expect(input).toBeInvalid();
    });
  });

  it("should render two radios to select the payment method, 'Cash on Delivery' should be checked", () => {
    const numOfRadios = 2;
    const name = "Cash on Delivery";
    const { getAllByRole } = renderForm();

    const radios = getAllByRole("radio");
    const [_, cashOn] = radios;

    expect(radios.length).toBe(numOfRadios);
    expect(cashOn).toHaveAccessibleName(name);
    expect(cashOn).toBeChecked();
  });

  it("should display two textboxes to write the card number and the card pin when e-Money radio is checked", async () => {
    const { getByRole, queryByRole } = renderForm();
    const queryCardNumberTextbox = () =>
      queryByRole("textbox", { name: "e-Money number" });
    const queryCardPinTextbox = () =>
      queryByRole("textbox", { name: "e-Money PIN" });

    expect(queryCardNumberTextbox()).not.toBeInTheDocument();
    expect(queryCardPinTextbox()).not.toBeInTheDocument();

    const eMoneyRadio = getByRole("radio", { name: "e-Money" });

    expect(eMoneyRadio).not.toBeChecked();
    await userEvent.click(eMoneyRadio);
    expect(eMoneyRadio).toBeChecked();

    expect(queryCardNumberTextbox()).toBeInTheDocument();
    expect(queryCardPinTextbox()).toBeInTheDocument();
  });

  it("should change the value of a writable input when we type", async () => {
    const name = "name";
    const text = "Alexander Guillén";
    const { getByRole } = renderForm();

    const nameInput = getByRole("textbox", { name });
    expect(nameInput).toHaveValue("");

    await userEvent.type(nameInput, text);

    expect(nameInput).toHaveValue(text);
  });
});
