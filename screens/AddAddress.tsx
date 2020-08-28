import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { Text, BackHeader, TextField, Button } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";

const AddAddress = ({}: StackScreenProps<CartStackParamList, "AddAddress">) => {
  const { top: height } = useSafeAreaInsets();
  const [address, setAddress] = useState<string>(
    "Flat No. 664, Spintex, Accra Ghana"
  );
  const [name, setName] = useState<string>("Nelson Benson");
  const [city, setCity] = useState<string>("Accra");
  const [postalCode, setPostalCode] = useState<string>("Male");
  const [phone, setPhone] = useState<string>("+23312012010");
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Create Address
          </Text>
          <TextField name="name" value={name} setValue={setName} />
          <TextField
            name="address lane"
            value={address}
            setValue={setAddress}
          />
          <TextField name="city" value={city} setValue={setCity} />
          <TextField
            name="postalCode"
            value={postalCode}
            setValue={setPostalCode}
          />
          <TextField
            name="phone"
            value={phone}
            setValue={setPhone}
            style={{ marginBottom: 150 }}
          />
          <Button
            label="Add Address"
            onPress={() => Alert.alert("Address", "New address added")}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
