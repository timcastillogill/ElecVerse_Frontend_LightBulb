export const productPriceFormatter = (productPrice) => {
  const productPriceToString = productPrice.toString();

  if (productPriceToString.length < 3) {
    return `0.${productPriceToString}`;
  }
  const subStringBeforeLastTwoCharacters = productPriceToString.slice(0, -2);
  const lastTwoCharacters = productPriceToString.slice(-2);
  return `£${subStringBeforeLastTwoCharacters}.${lastTwoCharacters}`;
};
