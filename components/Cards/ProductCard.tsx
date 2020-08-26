import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { HomeStackParamList, ProductProps } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Text from "../Text";
import { width } from "../../constants/Layout";

interface ProductCardProps {
  product: ProductProps;
  navigation: StackNavigationProp<HomeStackParamList, "Home" | "AllCategories">;
  first?: boolean;
}

const IMAGE_WIDTH = width * 0.4;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.2;

const ProductCard = ({ product, navigation, first }: ProductCardProps) => {
  const { name, price, image } = product;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { product })}
      style={{ ...styles.container, marginLeft: first ? 20 : 0 }}
      activeOpacity={0.8}
    >
      <Image
        source={image}
        resizeMode="cover"
        style={{
          height: IMAGE_HEIGHT,
          width: IMAGE_WIDTH,
        }}
      />
      <Text size="small" style={{ marginTop: 5 }}>
        ${price}.00
      </Text>
      <Text size="small" style={{ marginTop: 5 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT + 80,
    marginRight: 20,
  },
  overlay: {},
});
