import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, Button } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";

const Payment = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Payment">) => {
  const { top: height, bottom } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Payment
          </Text>
        </View>
      </ScrollView>
      <View style={{ ...styles.buttons }}>
        <Button
          label="Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </>
  );
};

export default Payment;

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
});
