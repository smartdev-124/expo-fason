import React from "react";
import { Text, StyleSheet, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../../constants/Layout";
import { white, blue } from "../../constants/Colors";

interface ButtonProps {
  label: string | number;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({ label, onPress, style }: ButtonProps) => {
  return (
    <RectButton onPress={onPress} style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: blue,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    color: white,
  },
});
