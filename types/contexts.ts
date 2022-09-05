import React, { createContext } from "react";

const categoryObject = {
  category: "",
  callback: (item: string) => {},
  setBurgerIsHover: () => {},
};

export const Category = createContext(categoryObject);
export const Burger = createContext(false);
