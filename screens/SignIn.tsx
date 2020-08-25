import React from "react";
import { View, StyleSheet } from "react-native";
import { white } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Form } from "../components";

const SignIn = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SignIn">) => {
  return (
    <View style={styles.container}>
      <Form navigation={navigation} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
