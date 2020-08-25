import React from "react";
import { StyleSheet, View } from "react-native";
import { Category, HomeStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RectButton } from "react-native-gesture-handler";
import Text from "../Text";

interface CategoryCardProps {
  category: Category;
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
  first: boolean;
}

const CARD_HEIGHT = 75;

const CategoryCard = ({ category, navigation, first }: CategoryCardProps) => {
  const { screen, name, color } = category;
  return (
    <RectButton
      onPress={() => navigation.navigate(screen)}
      style={{ ...styles.container, marginLeft: first ? 20 : 0 }}
    >
      <View style={{ ...styles.overlay, backgroundColor: color }}>
        <Text weight="medium" color="white">
          {name}
        </Text>
      </View>
    </RectButton>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    height: CARD_HEIGHT,
    width: CARD_HEIGHT * 2,
    borderRadius: 5,
    elevation: 3,
    marginRight: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
