import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { black } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.openDrawer}>
        <View style={styles.menuIcon}>
          <View style={{ ...styles.line, width: 28 }} />
          <View style={{ ...styles.line, width: 20 }} />
          <View style={{ ...styles.line, width: 24 }} />
        </View>
      </BorderlessButton>
      <View style={styles.row}>
        <BorderlessButton style={{ marginRight: 20, position: "relative" }}>
          <Ionicons name="md-notifications" color={black} size={28} />
          <View style={styles.dot} />
        </BorderlessButton>
        <BorderlessButton>
          <AntDesign name="filter" color={black} size={25} />
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
  dot: {
    position: "absolute",
    top: 2,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FB5895",
  },
  menuIcon: {
    width: 35,
    height: 32,
    justifyContent: "space-evenly",
  },
  line: {
    height: StyleSheet.hairlineWidth * 4,
    borderRadius: 6,
    backgroundColor: black,
  },
});
