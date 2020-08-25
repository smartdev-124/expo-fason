import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { black } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { BorderlessButton } from "react-native-gesture-handler";

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <View style={styles.container}>
      <BorderlessButton>
        <Ionicons name="ios-search" color={black} size={26} />
      </BorderlessButton>
      <View style={styles.row}>
        <BorderlessButton style={{ marginRight: 20 }}>
          <Ionicons name="ios-search" color={black} size={26} />
        </BorderlessButton>
        <BorderlessButton>
          <Ionicons name="ios-search" color={black} size={26} />
        </BorderlessButton>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
});
