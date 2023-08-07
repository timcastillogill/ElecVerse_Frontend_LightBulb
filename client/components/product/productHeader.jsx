import React from "react";

const ProductHeader = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img_url} alt="" />
      <h3>
        {product.power} // Packet of {product.quantity}
      </h3>
    </div>
  );
};

export default ProductHeader;
