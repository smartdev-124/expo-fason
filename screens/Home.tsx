import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { white } from "../constants/Colors";
import { Text, MainHeader, Searchbar, Categories } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

const Home = ({ navigation }: StackScreenProps<HomeStackParamList, "Home">) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <MainHeader />
        <Searchbar />
        <Categories navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
