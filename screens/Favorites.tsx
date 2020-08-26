import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface FavoritesProps {}

const Favorites = (props: FavoritesProps) => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Favorites
      </Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
