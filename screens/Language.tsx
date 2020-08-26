import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface LanguageProps {}

const Language = (props: LanguageProps) => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Language
      </Text>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
