import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface KidsCategoryProps {}

const KidsCategory = (props: KidsCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text>KidsCategory</Text>
    </View>
  );
};

export default KidsCategory;

const styles = StyleSheet.create({
  container: {},
});
