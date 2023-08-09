import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../pages/product";
import { products } from "../../server/db";
import { MockedProvider } from "@apollo/client/testing";

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(
    <MockedProvider>
      <Product productDataSet={products} />
    </MockedProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the cart", async () => {
  const { getByText, getByTitle } = render(
    <MockedProvider>
      <Product productDataSet={products} />
    </MockedProvider>
  );

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addTocartElement = getByText("Add to cart");
  fireEvent.click(addTocartElement);

  const cartIcon = screen.getByRole("button", {
    name: /open shopping cart/i,
  });
  fireEvent.click(cartIcon);

  const cartItems = getByTitle("Basket items");
  expect(cartItems).toHaveTextContent("4");
});
