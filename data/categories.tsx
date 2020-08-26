import { Category } from "../types";
export const categories: Category[] = [
  {
    name: "Woman",
    screen: "WomenCategory",
    colors: ["rgba(102, 106, 234, 0.7)", "rgba(100, 182, 255, 0.7)"],
    image: require("../assets/images/women.png"),
  },
  {
    name: "Man",
    screen: "MenCategory",
    colors: ["rgba(255, 88, 88, 0.7)", "rgba(251, 88, 149, 0.7)"],
    image: require("../assets/images/men.png"),
  },
  {
    name: "Kids",
    screen: "KidsCategory",
    colors: ["rgba(67, 233, 123, 0.7)", "rgba(56, 249, 215, 0.7)"],
    image: require("../assets/images/kids.png"),
  },
];
