import Input from "./Input";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "../styles/Header.module.scss";
import { SetStateAction } from "react";

interface Props {
  setBurgerIsHover?: React.Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setBurgerIsHover }: Props) => {
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
      <Input />
    </header>
  );
};

export default Header;
