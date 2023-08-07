import React from "react";

const ProductDescription = ({ productDescription }) => {
  return (
    <section className="p-2 bg-hemocyanin ">
      <div className="mx-2">
        <h3 className="mb-3 text-xl">Description</h3>
        <p className="text-base font-thin">{productDescription}</p>
      </div>
    </section>
  );
};

export default ProductDescription;
