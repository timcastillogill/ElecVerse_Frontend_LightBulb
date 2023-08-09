import React from "react";

const ProductHeader = ({ product }) => {
  return (
    <section className="max-w-xl m-4 md:mx-auto md:flex md:items-center">
      <div className="md:shrink-1">
        <img
          className="rounded-3xl md:h-full md:w-100"
          src={product.img_url}
          alt={product.name}
        />
      </div>
      <div className="md:ml-10 md:w-full">
        <h1 className="mt-4 text-3xl">{product.name}</h1>
        <h2 className="mt-1 text-sm text-slate-400">
          {product.power} // Packet of {product.quantity}
        </h2>
      </div>
    </section>
  );
};

export default ProductHeader;
