import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home/Home";
import CampingDetail from "./pages/Home/CampingDetail";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/Article/ArticleDetail";
import Add from "./pages/Add/Add";
import Community from "./pages/Community/Community";
import CommunityDetail from "./pages/Community/CommunityDetail";
import Setting from "./pages/Setting/Setting";

import Splash from "./pages/Splash/Splash";
import OnBoarding from "./pages/Splash/OnBoarding";

import Login from "./pages/LoginAndSignUp/Login/Login";
import LoginMiddleware from "./pages/LoginAndSignUp/Login/LoginMiddleware";
import Register from "./pages/LoginAndSignUp/Login/Register";
import FindPassword from "./pages/LoginAndSignUp/Login/FindPassword";
import RegisterSuccess from "./pages/LoginAndSignUp/Login/RegisterSuccess";

import CustomBottomTab from "./components/CustomBottomTab";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Article" component={Article} />
      <Tab.Screen name="Add" component={Add} />
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
      {/* <Stack.Screen name="MainTab" component={MainTab} /> */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginMiddleware" component={LoginMiddleware} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="FindPassword" component={FindPassword} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="CampingDetail" component={CampingDetail} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
