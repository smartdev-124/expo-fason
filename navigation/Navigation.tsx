import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList, HomeStackParamList } from "../types";
import {
  GetStarted,
  SignIn,
  SignUp,
  Home,
  WomenCategory,
  KidsCategory,
  MenCategory,
} from "../screens";

const RootStack = createStackNavigator<RootStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MenCategory" component={MenCategory} />
      <HomeStack.Screen name="WomenCategory" component={WomenCategory} />
      <HomeStack.Screen name="KidsCategory" component={KidsCategory} />
    </HomeStack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <RootStack.Screen name="GetStarted" component={GetStarted} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="Main" component={HomeNavigation} />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
