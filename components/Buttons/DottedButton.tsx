import React from "react";
import {
  Text,
  StyleSheet,
  ViewStyle,
  View,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../../constants/Layout";
import { white, black, blue } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface DottedButtonProps {
  label: string | number;
  onPress: () => void;
  style?: ViewStyle;
}

const DottedButton = ({ label, onPress, style }: DottedButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ ...styles.button }}
    >
      <Ionicons
        name="ios-add"
        color={blue}
        style={{ marginRight: 10 }}
        size={30}
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DottedButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: 20,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderStyle: "dotted",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: blue,
  },
});
