import Image from "next/image";

import styles from "./Image.module.scss";

interface Props {
  image: string;
}

export const ProductImage = ({ image }: Props) => {
  return (
    <div className={styles.img_wrapper}>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="product image"
      />
    </div>
  );
};
