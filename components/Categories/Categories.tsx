import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../Text";
import { HomeStackParamList, Category } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryCard } from "../Cards";

interface CategoriesProps {
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
}

const categories: Category[] = [
  {
    name: "Woman",
    screen: "WomenCategory",
    color: "rgba(102, 106, 234, 0.7)",
    image: require("../../assets/images/women.png"),
  },
  {
    name: "Man",
    screen: "MenCategory",
    color: "rgba(255, 88, 88, 0.7)",
    image: require("../../assets/images/men.png"),
  },
  {
    name: "Kids",
    screen: "KidsCategory",
    color: "rgba(67, 233, 123, 0.7)",
    image: require("../../assets/images/kids.png"),
  },
];

const Categories = ({ navigation }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text variant="medium">Categories</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AllCategories")}
        >
          <Text variant="small">See all</Text>
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
