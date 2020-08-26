import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import { RectButton } from "react-native-gesture-handler";
import { blue, grey } from "../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

interface DiscountProps {
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
}

const IMAGE_HEIGHT = 190;

const Discount = ({ navigation }: DiscountProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text size="tiny" color="blue">
            Halloween Offer
          </Text>
          <Text
            size="small"
            weight="medium"
            style={{ width: "50%", marginVertical: 5 }}
          >
            20% off in all our products
          </Text>
          <RectButton
            onPress={() => navigation.navigate("AllCategories")}
            style={styles.button}
          >
            <Text
              size="tiny"
              weight="medium"
              color="white"
              style={{ textTransform: "uppercase" }}
            >
              Shop now
            </Text>
          </RectButton>
          <View style={styles.pagination}>
            <View style={{ ...styles.dot }} />
            <View style={{ ...styles.dot, backgroundColor: blue }} />
            <View style={{ ...styles.dot }} />
          </View>
        </View>
        <Image
          source={require("../assets/images/halloween.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "aqua",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    height: IMAGE_HEIGHT,
    backgroundColor: "#EEEEEE",
    alignItems: "flex-end",
    position: "relative",
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT * 1.28,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
    paddingVertical: 20,
    paddingLeft: 30,
    zIndex: 10,
  },
  button: {
    width: 82,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: blue,
    marginVertical: 15,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 15,
    backgroundColor: grey,
  },
});
