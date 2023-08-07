import React, { useState } from "react";

const AddToCart = ({ product, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const productPriceFormatter = (productPrice) => {
    const productPriceToString = productPrice.toString();

    if (productPriceToString.length < 3) {
      return `0.${productPrice}`;
    }
    const subStringBeforeLastTwoCharacters = productPriceToString.slice(0, -2);
    const lastTwoCharacters = productPriceToString.slice(-2);
    return `${subStringBeforeLastTwoCharacters}.${lastTwoCharacters}`;
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
    <section>
      <h3>£{productPriceFormatter(product.price)}</h3>
      <button onClick={handleDecreaseQuantity} disabled={currentQuantity <= 1}>
        -
      </button>
      <span title="Current quantity">{currentQuantity}</span>
      <button onClick={handleIncreaseQuantity}>+</button>
      <button>Add to cart</button>
    </section>
  );
};

export default AddToCart;
