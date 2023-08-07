import React from "react";

const ProductHeader = ({ product }) => {
  return (
    <div className="m-4">
      <img className="rounded-3xl" src={product.img_url} alt={product.name} />
      <h1 className="mt-4 text-3xl">{product.name}</h1>
      <h3 className="mt-1 text-sm text-slate-400">
        {product.power} // Packet of {product.quantity}
      </h3>
    </div>
  );
};

export default ProductHeader;
