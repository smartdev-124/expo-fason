import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { grey } from "../../constants/Colors";
import Text from "../Text";
import { Button } from "../Buttons";

interface FormProps {
  navigation: StackNavigationProp<RootStackParamList, "SignIn" | "SignUp">;
  signup?: boolean;
}

const Form = ({ navigation, signup }: FormProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <ScrollView>
      <View style={{ ...styles.container, paddingTop }}>
        <BorderlessButton style={styles.backButton}>
          <Ionicons name="md-arrow-round-back" color={grey} size={26} />
        </BorderlessButton>
        <Text variant="big">{signup ? "Sign up" : "Log in"}</Text>
        {signup && (
          <View style={{ ...styles.inputContainer, marginTop: 40 }}>
            <Text variant="small" color="grey">
              Name
            </Text>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput} />
            </View>
          </View>
        )}
        <View style={{ ...styles.inputContainer, marginTop: 40 }}>
          <Text variant="small" color="grey">
            Email
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} />
          </View>
        </View>
        <View style={{ ...styles.inputContainer, marginTop: 40 }}>
          <Text variant="small" color="grey">
            Password
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput} secureTextEntry />
          </View>
        </View>
        <Button
          label={signup ? "Sign up" : "Log in"}
          onPress={() => navigation.navigate("Main")}
          style={{ width: "100%", marginTop: 50 }}
        />
        <View style={styles.row}>
          <Text variant="small" color="grey">
            {signup ? "Already have an account?" : "Don't have an account?"}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(signup ? "SignIn" : "SignUp")}
          >
            <Text variant="small">{signup ? " Sign in" : " Sign Up"}</Text>
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
  inputContainer: {
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
  row: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
  },
});
