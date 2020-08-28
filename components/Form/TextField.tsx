import React, { useState } from "react";
import { View, StyleSheet, TextInput, ViewStyle } from "react-native";
import Text from "../Text";
import { grey } from "../../constants/Colors";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface TextFieldProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewStyle;
  password?: boolean;
}

const TextField = ({
  name,
  value,
  setValue,
  style,
  password,
}: TextFieldProps) => {
  const [isVisible, setIsVisible] = useState<boolean | undefined>(password);
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
          secureTextEntry={isVisible}
        />
        {password && (
          <BorderlessButton onPress={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <Ionicons name="ios-eye" color={grey} size={26} />
            ) : (
              <Ionicons name="ios-eye-off" color={grey} size={26} />
            )}
          </BorderlessButton>
        )}
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
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderBottomColor: grey,
    height: 45,
    paddingRight: 5,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 20,
    fontFamily: "SFProDisplay-Regular",
    paddingRight: 10,
  },
});
