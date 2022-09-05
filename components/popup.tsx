import Categories from "./categories";
import useSWR from "swr";
import { fetchData } from "../api/fetchData";

import styles from "../styles/Popup.module.scss";

interface Props {
  show: boolean;
}

const Popup = ({ show = false }: Props) => {
  const { data } = useSWR(
    "https://fakestoreapi.com/products/categories",
    fetchData
  );

  return (
    <div
      className={`${styles.popup} ${
        show ? `${styles.show}` : `${styles.hide}`
      }`}
    >
      <Categories categories={data} />
    </div>
  );
};

export default Popup;
