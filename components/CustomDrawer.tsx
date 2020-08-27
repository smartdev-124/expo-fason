import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { BorderlessButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { black } from "../constants/Colors";
import { height, width } from "../constants/Layout";
import { DrawerParamList } from "../types";
import Animated, { Extrapolate } from "react-native-reanimated";

interface CustomDrawerProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const CustomDrawer = ({
  props: { navigation, progress },
}: CustomDrawerProps) => {
  const routes: { name: keyof DrawerParamList; label: string }[] = [
    { name: "Home", label: "Home" },
    { name: "Profile", label: "Profile" },
    { name: "MyCart", label: "My Cart" },
    { name: "Favorite", label: "Favorite" },
    { name: "MyOrders", label: "My Orders" },
    { name: "Language", label: "Language" },
    { name: "Settings", label: "Settings" },
  ];

  return (
    <View style={styles.container}>
      {routes.map(({ name, label }, index) => {
        const translateY = Animated.interpolate(progress, {
          inputRange: [0, 0.5],
          outputRange: [0, 5 * index],
        });
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(name)}
            activeOpacity={0.8}
            key={index}
            style={styles.item}
          >
            <Animated.Text style={{ ...styles.text }}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
      <BorderlessButton onPress={navigation.goBack} style={styles.closeIcon}>
        <AntDesign name="closecircleo" color={black} size={30} />
      </BorderlessButton>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: 70,
  },
  item: {
    marginVertical: height > 600 ? 15 : 10,
  },
  closeIcon: {
    position: "absolute",
    bottom: height > 600 ? 60 : 50,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "SFProDisplay-Regular",
  },
});
