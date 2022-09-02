import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/interfaces";

const ProductCard = ({ image, title, price }: Product) => {
  return (
    <div>
      <Link href="#">
        <div>
          {image !== undefined && <Image src={image} alt="" layout="fill" />}
        </div>
        <p>{title}</p>
        <p>
          <span>{price}</span>
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
