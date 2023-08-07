import React from "react";

const ProductHeader = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img_url} alt="" />
    </div>
  );
};

export default ProductHeader;
