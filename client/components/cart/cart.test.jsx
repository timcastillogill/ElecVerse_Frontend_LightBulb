import { render, screen } from "@testing-library/react";
import Cart from "./cart";

describe("Cart", () => {
  const productName = "Energy saving light bulb";
  const productQuantity = 1;
  describe("Given the 'Add to cart' button has been pressed with one Energy saving bulb", () => {
    it("when the user clicks the basket it will show 1 Energy saving bulb in their basket", () => {
      render(
        <Cart productName={productName} productQuantity={productQuantity} />
      );

      const basketItem = screen.getByRole("cell", {
        name: /energy saving light bulb/i,
      });
      const basketQuantity = screen.getByRole("cell", { name: /1/i });

      expect(basketItem).toHaveTextContent("Energy saving light bulb");
      expect(basketQuantity).toHaveTextContent("1");
    });
  });
});
