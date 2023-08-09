import React from "react";

const ProductDescription = ({ productDescription }) => {
  return (
    <section className="max-w-xl p-2 bg-hemocyanin md:mx-auto">
      <div className="mx-2">
        <h3 className="mb-3 text-xl">Description</h3>
        <p className="text-base font-thin">{productDescription}</p>
      </div>
    </section>
  );
};

export default ProductDescription;
