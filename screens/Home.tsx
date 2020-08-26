import React from "react";
import { View, ScrollView } from "react-native";
import { white } from "../constants/Colors";
import {
  MainHeader,
  Searchbar,
  Categories,
  Discount,
  Featured,
} from "../components";
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
        <Discount navigation={navigation} />
        <Categories navigation={navigation} />
        <Featured navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Home;
