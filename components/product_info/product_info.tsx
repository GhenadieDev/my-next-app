import { Button } from "../index";
import styles from "./ProductInfo.module.scss";

interface Props {
  price: number;
  rating: number;
  description: string;
}

export const ProductInfo = ({ price, rating, description }: Props) => {
  return (
    <div className={styles.info}>
      <p className={styles.price}>{price}</p>
      <Button>Add to cart</Button>
      <p>
        rating: <span>{rating}</span>
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
