import { DISCOUNT, SHIPPING_FEE } from "../constants/Payment";

export const calculateOrderTotal = (cartTotal: number): number =>
  Number(((cartTotal * (100 - DISCOUNT)) / 100 + SHIPPING_FEE).toFixed(2));
