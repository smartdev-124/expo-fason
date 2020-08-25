import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface MenCategoryProps {}

const MenCategory = (props: MenCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text>MenCategory</Text>
    </View>
  );
};

export default MenCategory;

const styles = StyleSheet.create({
  container: {},
});
