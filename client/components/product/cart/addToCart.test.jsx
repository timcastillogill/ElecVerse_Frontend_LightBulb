import AddToCart from "./addToCart";
import { mockProducts } from "./mockProduct";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Given an array of product objects and a quantity", () => {
  it("should start at 1", () => {
    render(<AddToCart product={mockProducts[0]} quantity={1} />);

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("1");
  });
  it("should increase by 1 when the plus button is clicked", () => {
    render(<AddToCart product={mockProducts[0]} quantity={1} />);

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("2");
  });

  it("should decrease by 1 when the minus button is clicked", () => {
    render(<AddToCart product={mockProducts[0]} quantity={1} />);

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    const quantity = screen.getByTitle("Current quantity");

    expect(quantity).toHaveTextContent("2");
  });

  it("should disable the minus button when the quantity is at 1", () => {
    render(<AddToCart product={mockProducts[0]} quantity={1} />);

    const minusButton = screen.getByText("-");

    expect(minusButton).toBeDisabled();
  });
});
