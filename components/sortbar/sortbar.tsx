import { useEffect, useState } from "react";
import { getMinMaxPrice } from "../../utils/getMinMaxPrice";
import { Product } from "../../types/interfaces";
import { Select } from "../index";

import styles from "./SortBar.module.scss";

interface Props {
  allProducts: Product[];
}

interface Price {
  minPrice?: number;
  maxPrice?: number;
}

export const SortBar = ({ allProducts }: Props) => {
  const [price, setPrice] = useState<Price>({});

  useEffect(() => {
    const { minPrice, maxPrice } = getMinMaxPrice(allProducts);
    setPrice((prevState) => ({
      ...prevState,
      minPrice,
      maxPrice,
    }));
  }, []);

  return (
    <div className={styles.sortbar}>
      <div className={styles.range_wrapper}>
        <span>Price</span>
        <div className={styles.range}>
          <input placeholder={`min: ${price.minPrice}`} />
          <input placeholder={`max: ${price.maxPrice}`} />
        </div>
      </div>
      <div className={styles.select_wrapper}>
        <span>Sort by:</span>
        <Select name="productPrice">
          <option value="lowToHigh">Low to heigh</option>
          <option value="highToLow">Heigh to low</option>
        </Select>
      </div>
    </div>
  );
};
