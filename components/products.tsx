import { Product } from "../types/interfaces";
import ProductCard from "./product_card";

import styles from "../styles/Products.module.scss";

interface Props {
  list?: Product[];
}

const Products = ({ list = [] }: Props) => {
  return (
    <ul className={styles.products}>
      {list?.length > 0 &&
        list?.map((product) => (
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
