import { render, screen } from "@testing-library/react";
import Cart from "./cart";

describe("Cart", () => {
  const productName = "Energy saving light bulb";
  const productQuantity = 1;
  describe("Given a product", () => {
    it("renders the name and quantity of the product", () => {
      render(
        <Cart productName={productName} productQuantity={productQuantity} />
      );

      const cartItem = screen.getByRole("cell", {
        name: /energy saving light bulb/i,
      });
      const cartQuantity = screen.getByRole("cell", { name: /1/i });

      expect(cartItem).toBeInTheDocument();
      expect(cartQuantity).toBeInTheDocument();
    });
  });
});
