import React, { useState } from "react";
import Header from "../components/header";
import ProductHeader from "../components/product/productHeader";
import { products } from "../../server/db";
import AddToCart from "../components/product/cart/addToCart";
import ProductDescription from "../components/productDescription";
import ProductSpecifications from "../components/productSpecifications";
import FinePrint from "../components/finePrint";

export default function Product() {
  const [productData, setProductData] = useState(products);
  const [cartQuantity, setCartQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setCartQuantity(newQuantity);
  };

  return (
    <div>
      <Header />
      <ProductHeader product={productData[0]} />
      <AddToCart
        productPrice={productData[0].price}
        quantity={cartQuantity}
        onQuantityChange={handleQuantityChange}
      />
      <ProductDescription productDescription={productData[0].description} />
      <ProductSpecifications product={productData[0]} />
      <FinePrint />
    </div>
  );
}
