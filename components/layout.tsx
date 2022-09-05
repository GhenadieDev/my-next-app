import { PropsWithChildren, useState } from "react";
import Header from "./header";
import Main from "./main";

import Popup from "./popup";
import { Provider } from "react";
import { Category } from "../types/contexts";

import styles from "../styles/Layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
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

export default Layout;
