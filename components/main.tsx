import { PropsWithChildren } from "react";
import styles from "../styles/Main.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
