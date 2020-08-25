import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { white } from "../constants/Colors";
import { Text, MainHeader, Searchbar } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <MainHeader />
        <Searchbar />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
