import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface OrdersProps {}

const Orders = (props: OrdersProps) => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Orders
      </Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
