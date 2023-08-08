import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Product from "../../pages/product";

describe("Cart", () => {
  describe("Given the 'Add to cart' button has been pressed with one Energy saving bulb", () => {
    it("when the user clicks the basket it will show 1 Energy saving bulb in their basket", () => {
      render(<Product />);

      const basket = screen.getByRole("img", { name: /your shopping basket/i });
      fireEvent.click(basket);

      const basketItem = screen.getByRole("basketItem");
      const basketQuantity = screen.getByRole("basketQuantity");

      expect(basketItem).toHaveTextContent("Energy saving light bulb");
      expect(basketQuantity).toHaveTextContent("1");
    });
  });
});
