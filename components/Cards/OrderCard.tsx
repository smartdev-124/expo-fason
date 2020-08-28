import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { ProductProps } from "../../types";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { blue } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface OrderCardProps {
  product: ProductProps;
  first?: boolean;
}

const IMAGE_SIZE = width * 0.3;

const OrderCard = ({ product, first }: OrderCardProps) => {
  const { name, price, image } = product;

  return (
    <View
      style={{
        ...styles.container,
        marginTop: first ? 20 : 0,
      }}
    >
      <Image
        source={image}
        resizeMode="cover"
        style={{
          height: IMAGE_SIZE,
          width: IMAGE_SIZE,
        }}
      />
      <View style={styles.content}>
        <View>
          <Text size="small">{name}</Text>
          <Text size="small" color="blue" style={{ marginTop: 5 }}>
            ${price}.00
          </Text>
        </View>
        <RectButton style={styles.button}>
          <Text size="small" color="white">
            Order Again
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: IMAGE_SIZE + 40,
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 20,
    padding: 20,
    elevation: 3,
  },
  content: {
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: blue,
  },
});
