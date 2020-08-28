import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, CartCard, Button } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppContext } from "../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";

const Cart = ({ navigation }: StackScreenProps<CartStackParamList, "Cart">) => {
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
          {cart.length > 0 ? (
            <View style={{ paddingBottom: 90 }}>
              {cart.map((product, index) => (
                <CartCard product={product} key={index} first={index === 0} />
              ))}
            </View>
          ) : (
            <Text
              size="small"
              weight="medium"
              style={{ marginTop: 150, textAlign: "center" }}
            >
              Your cart is empty
            </Text>
          )}
        </View>
      </ScrollView>
      {cart.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            label="Continue"
            onPress={() => navigation.navigate("Address")}
          />
        </View>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
});
