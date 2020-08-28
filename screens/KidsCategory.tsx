import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, ProductCard } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { kids } from "../data/products";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

const KidsCategory = ({}: StackScreenProps<
  HomeStackParamList,
  "KidsCategory"
>) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <Text size="big" style={{ marginLeft: 20, marginBottom: 20 }}>
          Kids Category
        </Text>
        <View style={styles.content}>
          {[...kids, kids[0]].map((product, index) => (
            <ProductCard key={index} product={product} noMarginRight={true} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default KidsCategory;

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
