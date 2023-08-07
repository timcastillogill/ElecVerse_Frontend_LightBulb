import React, { useState } from "react";
import Header from "../components/header";
import ProductHeader from "../components/product/productHeader";
import { products } from "../../server/db";

export default function Product() {
  const [productData, setProductData] = useState(products);
  return (
    <div>
      <Header />
      <ProductHeader product={productData[0]} />
    </div>
  );
}
