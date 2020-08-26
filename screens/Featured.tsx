import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface FeaturedProps {}

const Featured = (props: FeaturedProps) => {
  return (
    <View style={styles.container}>
      <Text>Featured</Text>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {},
});
