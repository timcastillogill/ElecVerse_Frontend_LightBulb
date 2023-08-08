import React from "react";

const Cart = ({ productName, productQuantity }) => {
  return (
    <section className="p-5 mr-2 rounded-lg bg-hemocyanin">
      <h2 className="mb-3 text-xl">Your Basket</h2>
      <table className="text-sm text-center border-separate table-auto border-spacing-4">
        <tbody title="Basket items">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>{productName}</td>
            <td>{productQuantity}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
