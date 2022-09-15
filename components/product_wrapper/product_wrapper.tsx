import { PropsWithChildren } from "react";
import styles from "./ProductWrapper.module.scss";

export const ProductWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.flex_container}>{children}</div>;
};
