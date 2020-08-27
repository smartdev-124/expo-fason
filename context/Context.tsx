import React, { useState, useContext, createContext, useEffect } from "react";
import { AppContext, ProductProps } from "../types";

const Context = createContext<AppContext>({
  cart: [],
  favourites: [],
  manageCart: () => {},
  manageFavourites: () => {},
  isProductInCart: () => false,
  isProductInFavourites: () => false,
  cartTotal: 0,
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [favourites, setFavourites] = useState<ProductProps[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.total));
    setCartTotal(Number(total.toFixed(2)));
  };

  const manageCart = (action: string, product?: ProductProps) => {
    let tempCart: ProductProps[] = [];
    let updatedProduct: ProductProps = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD":
        if (isProductInCart(product!)) {
          return;
        }
        product!.count = 1;
        product!.total = product!.price;
        setCart([...cart, product!]);
        break;
      case "REMOVE":
        setCart(cart.filter((cartItem) => cartItem.id !== product!.id));
        break;
      case "EMPTY":
        setCart([]);
        break;
      case "INCREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product!.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        updatedProduct.total = Number(
          (updatedProduct.count * updatedProduct.price).toFixed(2)
        );
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product!.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item.id !== product!.id));
          return;
        }
        updatedProduct.count--;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const isProductInCart = (product: ProductProps) => {
    if (cart.find((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  const manageFavourites = (action: string, product: ProductProps) => {
    switch (action) {
      case "ADD":
        if (isProductInFavourites(product)) {
          return;
        }
        setFavourites([...favourites, product]);
        break;
      case "REMOVE":
        setFavourites(
          favourites.filter((favourite) => favourite.id !== product.id)
        );
        break;
      default:
        break;
    }
  };

  const isProductInFavourites = (product: ProductProps) => {
    if (favourites.find((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  const state: AppContext = {
    cart,
    cartTotal,
    manageCart,
    isProductInCart,
    isProductInFavourites,
    favourites,
    manageFavourites,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
