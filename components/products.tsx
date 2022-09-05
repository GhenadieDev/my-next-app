import { Product } from "../types/interfaces";
import ProductCard from "./product_card";

import styles from "../styles/Products.module.scss";
import { Category } from "../types/contexts";
import { useContext, useEffect, useState } from "react";

interface Props {
  list?: Product[];
}

const Products = ({ list = [] }: Props) => {
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
          />
        ))}
    </ul>
  );
};

export default Products;
