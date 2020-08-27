import { ImageRequireSource } from "react-native";

export interface AppContext {
  cart: ProductProps[];
  manageCart: (
    action: "ADD" | "REMOVE" | "EMPTY" | "INCREASE" | "DECREASE",
    payload?: ProductProps
  ) => void;
  isProductInCart: (product: ProductProps) => boolean;
  cartTotal: number;
}

export type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  MenCategory: undefined;
  KidsCategory: undefined;
  WomenCategory: undefined;
  Featured: undefined;
  BestSell: undefined;
  AllCategories: undefined;
  Product: { product: ProductProps };
};

export interface Category {
  name: string;
  screen: keyof HomeStackParamList;
  colors: string[];
  image: ImageRequireSource;
}

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  MyCart: undefined;
  Favorite: undefined;
  MyOrders: undefined;
  Language: undefined;
  Settings: undefined;
};

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  count: number;
  total: number;
  image: ImageRequireSource;
  details: string;
}
