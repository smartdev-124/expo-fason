import React from "react";
import { StyleSheet, Image, ViewStyle } from "react-native";
import { Category, HomeStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../Text";
import { width } from "../../constants/Layout";

interface CategoryCardProps {
  category: Category;
  navigation: StackNavigationProp<HomeStackParamList, "Home" | "AllCategories">;
  first?: boolean;
  variant?: "big" | "small";
  style?: ViewStyle;
}

const CategoryCard = ({
  category,
  navigation,
  first,
  variant = "small",
}: CategoryCardProps) => {
  const { screen, name, colors, image } = category;

  const CARD_HEIGHT_SMALL = 75;
  const CARD_WIDTH_SMALL = CARD_HEIGHT_SMALL * 2.156;

  const CARD_WIDTH_BIG = width - 40;
  const CARD_HEIGHT_BIG = CARD_WIDTH_BIG * 0.6;

  const isSmall = variant === "small";

  const style: ViewStyle = {
    width: isSmall ? CARD_WIDTH_SMALL : CARD_WIDTH_BIG,
    height: isSmall ? CARD_HEIGHT_SMALL : CARD_HEIGHT_BIG,
  };

  return (
    <RectButton
      onPress={() => navigation.navigate(screen)}
      style={{
        ...styles.container,
        ...style,
        marginLeft: first && isSmall ? 20 : 0,
        marginRight: isSmall ? 20 : 0,
        marginBottom: isSmall ? 0 : 30,
        marginTop: first && !isSmall ? 20 : 0,
      }}
    >
      <Image
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
          borderRadius: 5,
        }}
      />
      <LinearGradient colors={colors} style={{ ...styles.overlay }}>
        <Text weight="medium" color="white" size={isSmall ? "regular" : "big"}>
          {name}
        </Text>
      </LinearGradient>
    </RectButton>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    elevation: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
