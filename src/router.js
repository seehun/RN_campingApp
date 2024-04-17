import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Community from "./pages/Community/Community";
import Setting from "./pages/Setting/Setting";

import Splash from "./pages/Splash/Splash";
import OnBoarding from "./pages/Splash/OnBoarding";

import Login from "./pages/LoginAndSignUp/Login/Login";
import Register from "./pages/LoginAndSignUp/Login/Register";
import FindPassword from "./pages/LoginAndSignUp/Login/FindPassword";
import RegisterSuccess from "./pages/LoginAndSignUp/Login/RegisterSuccess";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Article" component={Article} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen name="FindPassword" component={FindPassword} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
