import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, CategoryCard } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";
import { categories } from "../data/categories";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

const AllCategories = ({
  navigation,
}: StackScreenProps<HomeStackParamList, "AllCategories">) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={{ paddingHorizontal: 20 }}>
          <Text size="big" weight="medium">
            Categories
          </Text>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              navigation={navigation}
              variant="big"
              first={index === 0}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
