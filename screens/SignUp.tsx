import React from "react";
import { View, StyleSheet } from "react-native";
import { white } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Form } from "../components";

const SignUp = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignUp">) => {
  return (
    <View style={styles.container}>
      <Form navigation={navigation} signup />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
