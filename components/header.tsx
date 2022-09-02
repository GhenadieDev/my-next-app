import Input from "./Input";
import styles from "../styles/Header.module.scss";
import { MdOutlineReorder } from "react-icons/md";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burger_wrapper}>
        <MdOutlineReorder className={styles.burger} />
        <h2 style={{ color: "white" }}>Catalog</h2>
      </div>
      <Input />
    </header>
  );
};

export default Header;
