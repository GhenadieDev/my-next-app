import styles from "../styles/Input.module.scss";

const Input = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <button className={styles.search_button}>Go</button>
    </form>
  );
};

export default Input;
