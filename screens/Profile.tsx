import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { Text, BackHeader, TextField, Button } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";

const Profile = () => {
  const { top: height } = useSafeAreaInsets();
  const [email, setEmail] = useState<string>("nelson@gmail.com");
  const [address, setAddress] = useState<string>(
    "Flat No. 664, Spintex, Accra Ghana"
  );
  const [name, setName] = useState<string>("Nelson Benson");
  const [city, setCity] = useState<string>("Accra");
  const [gender, setGender] = useState<string>("Male");
  const [phone, setPhone] = useState<string>("+23312012010");
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Profile
          </Text>
          <TextField name="name" value={name} setValue={setName} />
          <TextField name="address" value={address} setValue={setAddress} />
          <TextField name="city" value={city} setValue={setCity} />
          <TextField name="gender" value={gender} setValue={setGender} />
          <TextField name="email" value={email} setValue={setEmail} />
          <TextField
            name="phone"
            value={phone}
            setValue={setPhone}
            style={{ marginBottom: 60 }}
          />
          <Button
            label="Save Changes"
            onPress={() =>
              Alert.alert("Profile", "New changes successfully saved")
            }
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
