import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  RootStackParamList,
  HomeStackParamList,
  DrawerParamList,
} from "../types";
import {
  GetStarted,
  SignIn,
  SignUp,
  Home,
  WomenCategory,
  KidsCategory,
  MenCategory,
  AllCategories,
} from "../screens";

const RootStack = createStackNavigator<RootStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

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
      <HomeStack.Screen name="AllCategories" component={AllCategories} />
    </HomeStack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigation} />
    </Drawer.Navigator>
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
      <RootStack.Screen name="Main" component={DrawerNavigation} />
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
