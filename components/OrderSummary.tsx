import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { lightgrey } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { calculateOrderTotal } from "../utils/calculateOrderTotal";
import { DISCOUNT, SHIPPING_FEE } from "../constants/Payment";

const OrderSummary = () => {
  const { cartTotal } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text size="small" color="grey">
          Subtotal
        </Text>
        <Text size="small">${cartTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text size="small" color="grey">
          Discount
        </Text>
        <Text size="small">{DISCOUNT}%</Text>
      </View>
      <View style={styles.row}>
        <Text size="small" color="grey">
          Shipping
        </Text>
        <Text size="small">${SHIPPING_FEE}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text size="small" color="grey">
          Total
        </Text>
        <Text size="small">${calculateOrderTotal(cartTotal)}</Text>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  separator: {
    height: StyleSheet.hairlineWidth * 2,
    width: "100%",
    backgroundColor: lightgrey,
    marginVertical: 3,
  },
});
