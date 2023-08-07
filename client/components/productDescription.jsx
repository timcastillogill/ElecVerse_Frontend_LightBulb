import React from "react";

const ProductDescription = ({ productDescription }) => {
  return (
    <section>
      <h3>Description</h3>
      <p>{productDescription}</p>
    </section>
  );
};

export default ProductDescription;
