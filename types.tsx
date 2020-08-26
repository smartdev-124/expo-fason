import { ImageRequireSource } from "react-native";

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
