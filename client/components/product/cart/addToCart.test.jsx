import AddToCart from "./addToCart";
import { mockProducts } from "./mockProduct";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Given an array of product objects and a quantity", () => {
  const mockProduct = { price: 1299 };
  const mockOnQuantityChange = jest.fn();

  it("should start at 1", () => {
    render(
      <AddToCart
        product={mockProduct}
        quantity={1}
        onQuantityChange={mockOnQuantityChange}
      />
    );

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("1");
  });
  it("should increase by 1 when the plus button is clicked", () => {
    render(
      <AddToCart
        product={mockProduct}
        quantity={1}
        onQuantityChange={mockOnQuantityChange}
      />
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("2");
  });

  it("should decrease by 1 when the minus button is clicked", () => {
    render(
      <AddToCart
        product={mockProduct}
        quantity={1}
        onQuantityChange={mockOnQuantityChange}
      />
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("2");
  });

  it("should disable the minus button when the quantity is at 1", () => {
    render(
      <AddToCart
        product={mockProduct}
        quantity={1}
        onQuantityChange={mockOnQuantityChange}
      />
    );

    const minusButton = screen.getByText("-");

    expect(minusButton).toBeDisabled();
  });
});
