import { useContext, useEffect, useState } from "react";
import { Product } from "../../types/interfaces";
import { Category } from "../../types/contexts";
import { ProductCard } from "../index";

import styles from "./Products.module.scss";

interface Props {
  list?: Product[];
}

export const Products = ({ list = [] }: Props) => {
  const { category } = useContext(Category);
  const [products, setProducts] = useState<Product[]>([]);

  const newArray = list?.filter(
    (item) => item.category === category.toLowerCase()
  );

  useEffect(() => {
    setProducts(newArray.length > 0 ? newArray : list);
  }, [category]);

  return (
    <ul className={styles.products}>
      {products?.length > 0 &&
        products?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
    </ul>
  );
};
