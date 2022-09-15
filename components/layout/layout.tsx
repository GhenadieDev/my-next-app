import { PropsWithChildren, useState } from "react";
import { Category } from "../../types/contexts";
import { Header, Main, Popup } from "../index";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState("");
  const [burgerisHover, setBurgerIsHover] = useState(false);

  return (
    <div className={styles.layout}>
      <Header setBurgerIsHover={setBurgerIsHover} />
      <Category.Provider
        value={{
          category,
          callback: (item: string) => setCategory(item),
          setBurgerIsHover: () => setBurgerIsHover(false),
        }}
      >
        <Popup show={burgerisHover} />
        <Main>{children}</Main>
      </Category.Provider>
    </div>
  );
};
