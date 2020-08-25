import React from "react";
import { View, StyleSheet } from "react-native";
import { white } from "../constants/Colors";
import { Text } from "../components";

interface ProductProps {}

const Product = (props: ProductProps) => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
});
