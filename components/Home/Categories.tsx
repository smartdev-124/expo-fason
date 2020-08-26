import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../Text";
import { HomeStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryCard } from "../Cards";
import { categories } from "../../data/categories";

interface CategoriesProps {
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
}

const Categories = ({ navigation }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text size="medium">Categories</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AllCategories")}
        >
          <Text size="small">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <CategoryCard
            navigation={navigation}
            key={index}
            category={category}
            first={index === 0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

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
