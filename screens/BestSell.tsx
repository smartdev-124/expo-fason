import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface BestSellProps {}

const BestSell = (props: BestSellProps) => {
  return (
    <View style={styles.container}>
      <Text>BestSell</Text>
    </View>
  );
};

export default BestSell;

const styles = StyleSheet.create({
  container: {},
});
