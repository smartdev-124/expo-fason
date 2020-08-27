import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, Button } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";

const Address = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Address">) => {
  const { top: height, bottom } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Address
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
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
});
