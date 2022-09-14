import { SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./Header.module.scss";

interface Props {
  setBurgerIsHover?: React.Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setBurgerIsHover }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.burger_wrapper}>
        <GiHamburgerMenu
          className={styles.burger}
          onMouseOver={() =>
            setBurgerIsHover !== undefined ? setBurgerIsHover(true) : undefined
          }
        />
        <h2 className={styles.cats} style={{ color: "white" }}>
          Categories
        </h2>
      </div>
    </header>
  );
};
