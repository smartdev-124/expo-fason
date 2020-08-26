import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { black } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface BackHeaderProps {}

const BackHeader = (props: BackHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Ionicons name="ios-arrow-round-back" color={black} size={36} />
      </BorderlessButton>
      <BorderlessButton>
        <Ionicons name="ios-notifications-outline" color={black} size={26} />
      </BorderlessButton>
    </View>
  );
};

export default BackHeader;

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
