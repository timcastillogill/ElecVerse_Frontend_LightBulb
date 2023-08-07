import React from "react";

const ProductSpecifications = ({ product }) => {
  return (
    <section>
      <table>
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
