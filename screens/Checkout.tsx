import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Text,
  BackHeader,
  Button,
  CartCard,
  OrderSummary,
} from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white, grey, blue } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { address } from "../data/address";
import { BorderlessButton } from "react-native-gesture-handler";

const RADIO_BUTTON_SIZE = 20;

const Checkout = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Checkout">) => {
  const { top: height, bottom } = useSafeAreaInsets();
  const { cart } = useAppContext();
  const { house, name, road } = address[0];
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Checkout
          </Text>
          {cart.map((product, index) => (
            <CartCard product={product} key={index} first={index === 0} />
          ))}
          <View style={styles.address}>
            <View style={{ flex: 1 }}>
              <Text size="small">{name}</Text>
              <Text size="small">{house}</Text>
              <Text size="small">{road}</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radio}>
                <View style={styles.active} />
              </View>
            </View>
          </View>
          <OrderSummary />
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          label="Place order"
          onPress={() => navigation.navigate("Confirmation")}
        />
      </View>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttons: {
    width: "100%",
    bottom: 0,
    left: 0,
    backgroundColor: white,
    paddingBottom: 20,
  },
  address: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  radioButtonContainer: {
    width: 30,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    width: RADIO_BUTTON_SIZE,
    height: RADIO_BUTTON_SIZE,
    borderRadius: RADIO_BUTTON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth * 2.5,
    borderColor: grey,
  },
  active: {
    width: RADIO_BUTTON_SIZE * 0.55,
    height: RADIO_BUTTON_SIZE * 0.55,
    borderRadius: RADIO_BUTTON_SIZE / 2,
    backgroundColor: blue,
  },
});
