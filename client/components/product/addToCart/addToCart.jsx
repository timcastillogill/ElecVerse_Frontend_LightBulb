import React, { useState } from "react";

const AddToCart = ({ productPrice, quantity, onQuantityChange }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const productPriceFormatter = (productPrice) => {
    if (typeof productPrice === "number") {
      const productPriceToString = productPrice.toString();

      if (productPriceToString.length < 3) {
        return `0.${productPriceToString}`;
      }
      const subStringBeforeLastTwoCharacters = productPriceToString.slice(
        0,
        -2
      );
      const lastTwoCharacters = productPriceToString.slice(-2);
      return `${subStringBeforeLastTwoCharacters}.${lastTwoCharacters}`;
    }
    return "N/A";
  };

  const handleDecreaseQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setCurrentQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <section className="m-2">
      <small className="flex justify-end mr-10 text-xs">Qty</small>
      <div className="flex flex-row justify-between">
        <h3 className="ml-2 text-xl ">
          £{productPriceFormatter(productPrice)}
        </h3>
        <div>
          <button
            className="text-xl text-siphon h-7 w-7 rounded-xl bg-sohoLights disabled:opacity-75"
            onClick={handleDecreaseQuantity}
            disabled={currentQuantity <= 1}
          >
            -
          </button>
          <span className="mx-3 text-xl" title="Current quantity">
            {currentQuantity}
          </span>
          <button
            className="text-xl text-siphon h-7 w-7 rounded-xl bg-sohoLights"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex">
        <button
          className="w-screen h-10 mx-2 mt-4 rounded-md text-siphon justify-stretch bg-sohoLights hover:bg-plum"
          onClick={onQuantityChange(currentQuantity)}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default AddToCart;
