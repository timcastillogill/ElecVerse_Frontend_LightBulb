import React, { useState } from "react";
import Header from "../components/header";
import ProductHeader from "../components/product/productHeader";
import AddToCart from "../components/addToCart/addToCart";
import ProductDescription from "../components/product/productDescription";
import ProductSpecifications from "../components/product/productSpecifications";
import FinePrint from "../components/finePrint";
import client from "../apolloClient";
import { gql } from "@apollo/client";

export default function Product({ productDataSet }) {
  const [productData, setProductData] = useState(productDataSet);
  const [cartQuantity, setCartQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setCartQuantity(newQuantity);
  };

  return (
    <div>
      <Header basketTotal={cartQuantity} productName={productData[0].name} />
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

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: gql`
        {
          allProducts {
            id
            name
            power
            description
            price
            quantity
            brand
            weight
            height
            width
            length
            model_code
            colour
            img_url
          }
        }
      `,
    });
    return {
      props: {
        productDataSet: data.allProducts,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        productDataSet: [],
      },
    };
  }
}
