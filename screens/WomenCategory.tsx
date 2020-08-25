import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface WomenCategoryProps {}

const WomenCategory = (props: WomenCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text>WomenCategory</Text>
    </View>
  );
};

export default WomenCategory;

const styles = StyleSheet.create({
  container: {},
});
