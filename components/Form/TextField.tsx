import React, { useState } from "react";
import { View, StyleSheet, TextInput, ViewStyle } from "react-native";
import Text from "../Text";
import { grey } from "../../constants/Colors";

interface TextFieldProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewStyle;
}

const TextField = ({ name, value, setValue, style }: TextFieldProps) => {
  return (
    <View style={{ ...styles.container, marginTop: 20, ...style }}>
      <Text size="small" color="grey" style={{ textTransform: "capitalize" }}>
        {name}
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textInputContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: grey,
    height: 45,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 20,
    fontFamily: "SFProDisplay-Regular",
  },
});
