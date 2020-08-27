import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppContext } from "../context/Context";

interface CartProps {}

const Cart = (props: CartProps) => {
  const { top: height } = useSafeAreaInsets();
  const { cart } = useAppContext();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Cart
          </Text>
          {cart.map((product, index) => (
            <Text key={index}>{product.name}</Text>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
