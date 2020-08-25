import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { white } from "../constants/Colors";
import { Text, Button, TransparentButton } from "../components";
import { width } from "../constants/Layout";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface GetStartedProps {}

const GetStarted = ({
  navigation,
}: StackScreenProps<RootStackParamList, "GetStarted">) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Welcome to</Text>
        <Text weight="bold"> Fason</Text>
      </View>
      <Text>Explore Us</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/get-started.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Button
        label="Log in"
        onPress={() => navigation.navigate("SignIn")}
        style={{ width: width * 0.7 }}
      />
      <TransparentButton
        label="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        style={{ width: width * 0.7 }}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 100,
    paddingBottom: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.9,
    height: width * 0.9,
    marginVertical: 50,
  },
});
