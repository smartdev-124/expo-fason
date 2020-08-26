import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text size="big" weight="bold">
        Profile
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
