import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import SplashImage from "../../assets/images/SplashScreen.png";

const { width, height } = Dimensions.get("window");

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding");
    }, 1000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={SplashImage} style={styles.mainImage} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: width,
    height: height,
  },
});
