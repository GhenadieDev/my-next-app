import useSWR from "swr";
import { fetchData } from "../../api/fetchData";
import { Categories } from "../index";

import styles from "./Popup.module.scss";

interface Props {
  show: boolean;
}

export const Popup = ({ show = false }: Props) => {
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
