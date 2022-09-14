import { PropsWithChildren } from "react";

import styles from "./Select.module.scss";

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  name?: string;
}

export const Select = ({
  children,
  name,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <select className={styles.select} name={name} {...props}>
      {children}
    </select>
  );
};
