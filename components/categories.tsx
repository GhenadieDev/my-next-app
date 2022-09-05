import { useContext } from "react";
import { Category, Burger } from "../types/contexts";

import styles from "../styles/Categories.module.scss";

interface Props {
  categories: string[];
}

const Categories = ({ categories }: Props) => {
  const context = useContext(Category);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.target as HTMLElement;
    context.callback(text.innerText);
    context.setBurgerIsHover();
  };

  return (
    <ul className={styles.categories}>
      {categories?.length > 0 &&
        categories.map((category, idx) => (
          <li className={styles.category} key={idx} onClick={handleClick}>
            {category}
          </li>
        ))}
    </ul>
  );
};

export default Categories;
