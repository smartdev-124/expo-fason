import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { width } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { grey, white } from "../constants/Colors";

interface SearchbarProps {}

const Searchbar = (props: SearchbarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Ionicons
          name="ios-search"
          color={grey}
          size={26}
          style={{ marginHorizontal: 15 }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search Your Product"
          placeholderTextColor={grey}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textInputContainer: {
    height: 55,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white,
    elevation: 3,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 20,
  },
});
