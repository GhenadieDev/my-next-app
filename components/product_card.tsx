import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/interfaces";

import styles from "../styles/ProductCard.module.scss";

const ProductCard = ({ image, title, price }: Product) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.image_wrapper}>
        {image !== undefined && (
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>

      <Link href="#">
        <p className={styles.title}>{title}</p>
      </Link>
      <span className={styles.price}>${price}</span>
    </div>
  );
};

export default ProductCard;
