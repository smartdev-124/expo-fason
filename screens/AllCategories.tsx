import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface AllCategoriesProps {}

const AllCategories = (props: AllCategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text>AllCategories</Text>
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {},
});
