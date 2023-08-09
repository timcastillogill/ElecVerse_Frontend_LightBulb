import { render, screen } from "@testing-library/react";
import Cart from "./cart";

describe("Cart", () => {
  const productName = "Energy saving light bulb";
  const productQuantity = 1;
  describe("Given the 'Add to cart' button has been pressed with one Energy saving bulb", () => {
    it("when the user clicks the cart it will show 1 Energy saving bulb in their cart", () => {
      render(
        <Cart productName={productName} productQuantity={productQuantity} />
      );

      const cartItem = screen.getByRole("cell", {
        name: /energy saving light bulb/i,
      });
      const cartQuantity = screen.getByRole("cell", { name: /1/i });

      expect(cartItem).toHaveTextContent("Energy saving light bulb");
      expect(cartQuantity).toHaveTextContent("1");
    });
  });
});
