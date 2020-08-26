import React, { ReactNode } from "react";
import { Text as RNText, TextStyle, TextProps } from "react-native";
import { black, white, grey, blue } from "../constants/Colors";

interface Props extends TextProps {
  children: ReactNode;
  style?: TextStyle;
  color?: "black" | "grey" | "white" | "blue";
  size?: "big" | "medium" | "regular" | "small" | "tiny";
  weight?: "regular" | "bold" | "semi-bold" | "medium";
}

const Text = ({
  children,
  style,
  size = "regular",
  weight = "regular",
  color: textColor = "black",
  ...props
}: Props) => {
  let fontSize, color, fontFamily;

  switch (size) {
    case "big":
      fontSize = 34;
      break;
    case "medium":
      fontSize = 28;
      break;
    case "regular":
      fontSize = 24;
      break;
    case "small":
      fontSize = 20;
      break;
    case "tiny":
      fontSize = 16;
      break;
    default:
      break;
  }

  switch (textColor) {
    case "black":
      color = black;
      break;
    case "white":
      color = white;
      break;
    case "grey":
      color = grey;
      break;
    case "blue":
      color = blue;
      break;
    default:
      break;
  }

  switch (weight) {
    case "bold":
      fontFamily = "SFProDisplay-Bold";
      break;
    case "medium":
      fontFamily = "SFProDisplay-Medium";
      break;
    case "regular":
      fontFamily = "SFProDisplay-Regular";
      break;
    case "semi-bold":
      fontFamily = "SFProDisplay-SemiBold";
      break;
    default:
      break;
  }

  return (
    <RNText {...props} style={{ fontSize, color, fontFamily, ...style }}>
      {children}
    </RNText>
  );
};

export default Text;
