import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ProductProps } from "../../types";
import Text from "../Text";
import { width } from "../../constants/Layout";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { grey, lightgrey } from "../../constants/Colors";
import { useAppContext } from "../../context/Context";

interface CartCardProps {
  product: ProductProps;
  first?: boolean;
}

const IMAGE_SIZE = width * 0.3;

const CartCard = ({ product, first }: CartCardProps) => {
  const { manageCart } = useAppContext();
  const { name, price, image, count } = product;

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
          //   margin: 20,
        }}
      />
      <View style={styles.content}>
        <View>
          <Text size="small">{name}</Text>
          <Text size="small" color="blue" style={{ marginTop: 5 }}>
            ${price}.00
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => manageCart("DECREASE", product)}
          >
            <Ionicons name="ios-remove" color={grey} size={30} />
          </TouchableOpacity>
          <Text
            size="small"
            color="grey"
            weight="medium"
            style={{ marginHorizontal: 5 }}
          >
            {count}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => manageCart("INCREASE", product)}
          >
            <Ionicons name="ios-add" color={grey} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => manageCart("REMOVE", product)}
        style={styles.removeIcon}
      >
        <Ionicons name="ios-close" color={grey} size={38} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: IMAGE_SIZE + 40,
    flexDirection: "row",
    backgroundColor: "white",
    position: "relative",
    alignSelf: "center",
    marginBottom: 20,
    padding: 20,
    elevation: 3,
  },
  content: {
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  removeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  buttons: {
    flexDirection: "row",
    width: 140,
    height: 40,
    backgroundColor: lightgrey,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
