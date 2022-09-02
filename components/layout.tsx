import { PropsWithChildren } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";

import styles from "../styles/Layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
