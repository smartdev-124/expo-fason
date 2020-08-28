import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, ProductCard } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { bestsell } from "../data/products";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

const BestSell = ({}: StackScreenProps<HomeStackParamList, "BestSell">) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <Text size="big" style={{ marginLeft: 20, marginBottom: 20 }}>
          BestSell
        </Text>
        <View style={styles.content}>
          {bestsell.map((product, index) => (
            <ProductCard key={index} product={product} noMarginRight={true} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default BestSell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
