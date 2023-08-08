import React from "react";

const ProductSpecifications = ({ product }) => {
  return (
    <section className="max-w-xl p-2 mx-2 mt-2 md:mx-auto">
      <h3 className="mb-3 text-xl">Specifications</h3>
      <table className="text-sm border-separate table-auto border-spacing-4">
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td>Item weight (g)</td>
            <td>{product.weight}</td>
          </tr>
          <tr>
            <td>Dimensions (cm)</td>
            <td>
              {product.height} x {product.width} x {product.length}
            </td>
          </tr>
          <tr>
            <td>Item Model number</td>
            <td>{product.model_code}</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td>{product.colour}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ProductSpecifications;
