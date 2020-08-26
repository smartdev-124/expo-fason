import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Cart
      </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
