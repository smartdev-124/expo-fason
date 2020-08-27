import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { white } from "../constants/Colors";
import { width } from "../constants/Layout";
import { CommonActions } from "@react-navigation/native";

const IMAGE_SIZE = width * 0.7;

const Confirmation = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Confirmation">) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/images/like.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text size="big" weight="medium" style={{ marginVertical: 10 }}>
          Confirmation
        </Text>
        <Text size="small" color="grey">
          You have successfully
        </Text>
        <Text size="small" color="grey">
          completed your payment procedure
        </Text>
      </View>
      <Button
        label="Back to home"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "Home" }],
            })
          )
        }
      />
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: "space-between",
    backgroundColor: white,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginBottom: 30,
  },
});
