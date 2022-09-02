import { Product } from "../types/interfaces";
import ProductCard from "./product_card";

interface Props {
  list?: Product[];
}

const Products = ({ list = [] }: Props) => {
  return (
    <ul>
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
