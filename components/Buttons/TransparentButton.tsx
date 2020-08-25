import React from "react";
import { Text, StyleSheet, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { width } from "../../constants/Layout";
import { white, black } from "../../constants/Colors";

interface TransparentButtonProps {
  label: string | number;
  onPress: () => void;
  style?: ViewStyle;
}

const TransparentButton = ({
  label,
  onPress,
  style,
}: TransparentButtonProps) => {
  return (
    <RectButton onPress={onPress} style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: black,
  },
});
