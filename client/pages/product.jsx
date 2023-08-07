import React, { useState } from "react";
import Header from "../components/header";
import ProductHeader from "../components/product/productHeader";
import { products } from "../../server/db";
import AddToCart from "../components/product/cart/addToCart";

export default function Product() {
  const [productData, setProductData] = useState(products);
  const [cartQuantity, setCartQuantity] = useState(1);
  return (
    <div>
      <Header />
      <ProductHeader product={productData[0]} />
      <AddToCart product={productData[0]} quantity={cartQuantity} />
    </div>
  );
}
