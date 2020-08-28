import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { grey } from "../../constants/Colors";
import Text from "../Text";
import { Button } from "../Buttons";
import { CommonActions } from "@react-navigation/native";
import TextField from "./TextField";

interface FormProps {
  navigation: StackNavigationProp<RootStackParamList, "SignIn" | "SignUp">;
  signup?: boolean;
}

const Form = ({ navigation, signup }: FormProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <ScrollView>
      <View style={{ ...styles.container, paddingTop }}>
        <BorderlessButton onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons name="md-arrow-round-back" color={grey} size={26} />
        </BorderlessButton>
        <Text size="big">{signup ? "Sign up" : "Log in"}</Text>
        {signup && <TextField name="name" value={name} setValue={setName} />}
        <TextField name="email" value={email} setValue={setEmail} />
        <TextField
          name="password"
          value={password}
          setValue={setPassword}
          password
        />
        <Button
          label={signup ? "Sign up" : "Log in"}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: "Main" }],
              })
            )
          }
          style={{ width: "100%", marginTop: 50 }}
        />
        <View style={styles.row}>
          <Text size="small" color="grey">
            {signup ? "Already have an account?" : "Don't have an account?"}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(signup ? "SignIn" : "SignUp")}
          >
            <Text size="small">{signup ? " Sign in" : " Sign Up"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 30,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
  },
});
