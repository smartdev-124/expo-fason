import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../Text";
import { HomeStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductCard } from "../Cards";
import { men, women } from "../../data/products";

interface BestSellProps {
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
}

const BestSell = ({ navigation }: BestSellProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text size="medium">BestSell</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("BestSell")}
        >
          <Text size="small">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[women[2], women[1], men[0]].map((product, index) => (
          <ProductCard
            navigation={navigation}
            key={index}
            product={product}
            first={index === 0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BestSell;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
