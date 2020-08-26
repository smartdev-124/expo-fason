import React from "react";
import { View, ScrollView } from "react-native";
import { white } from "../constants/Colors";
import {
  MainHeader,
  Searchbar,
  Categories,
  Discount,
  Featured,
  BestSell,
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
        <Categories navigation={navigation} />
        <Discount navigation={navigation} />
        <Featured navigation={navigation} />
        <BestSell navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Home;
