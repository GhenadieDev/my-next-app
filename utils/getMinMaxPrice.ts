import { Product } from "../types/interfaces";

export const getMinMaxPrice = (products: Product[]) => {
  const prices: number[] = [];

  if (products !== undefined) {
    products.forEach((product) => {
      if (product.price !== undefined) {
        prices.push(product.price);
      }
    });
  }

  const result: number[] = prices.sort((a, b) => a - b);

  const obj = {
    minPrice: Math.floor(result[0]),
    maxPrice: Math.round(result[result.length - 1]),
  };

  return obj;
};
