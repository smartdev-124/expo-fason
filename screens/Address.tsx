import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, BackHeader, Button, DottedButton } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white, blue, grey } from "../constants/Colors";
import { address } from "../data/address";
import { BorderlessButton } from "react-native-gesture-handler";

const RADIO_BUTTON_SIZE = 20;

const Address = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Address">) => {
  const { top: height, bottom } = useSafeAreaInsets();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Address
          </Text>
          {address.map(({ name, house, road }, index) => (
            <View key={index} style={styles.address}>
              <View style={{ flex: 1 }}>
                <Text size="small">{name}</Text>
                <Text size="small">{house}</Text>
                <Text size="small">{road}</Text>
              </View>
              <View style={styles.radioButtonContainer}>
                <BorderlessButton
                  style={{ padding: 5 }}
                  onPress={() => setActiveIndex(index)}
                >
                  <View style={styles.radio}>
                    {activeIndex === index && <View style={styles.active} />}
                  </View>
                </BorderlessButton>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <DottedButton
          label="Add Address"
          onPress={() => navigation.navigate("AddAddress")}
        />
        <Button
          label="Continue to payment"
          onPress={() => navigation.navigate("Payment")}
        />
      </View>
    </>
  );
};

export default Address;

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
    marginTop: 30,
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
