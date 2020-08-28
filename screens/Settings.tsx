import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Settings
      </Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
