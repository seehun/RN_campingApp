import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import React, { useRef } from "react";

const CustomBottomTabs = ({ state, navigation, insets, descriptors }) => {
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;
  const tab5Value = useRef(new Animated.Value(0)).current;

  const scaleAnimated = (value, animatedValue) =>
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const animatedValue = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
    4: tab5Value,
  };

  return (
    <View style={[styles.bottomTabsWrapper]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;
        const animatedOf = animatedValue[index];

        const iconFlag = (bool) => {
          switch (label) {
            case "Home":
              return bool ? home : homeOff;
            case "Article":
              return bool ? Article : ArticleOff;
            case "Add":
              return Add;
            case "Community": // chatting 으로 구성
              return bool ? Community : CommunityOff;
            case "Setting":
              return bool ? Settings : SettingsOff;
          }
        };
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          scaleAnimated(1, animatedOf).start(({ finished }) => {
            if (finished) {
              scaleAnimated(0, animatedOf).start();
            }
          });
        };

        return (
          <TouchableOpacity
            style={styles.bottomTab}
            activeOpacity={0.7}
            key={index}
            onPress={onPress}
          >
            <Animated.Image
              source={iconFlag(isFocused)}
              style={[
                styles.icon,
                label === "Add" && styles.addIconStyle,
                {
                  transform: [
                    {
                      scale: animatedOf.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.9],
                      }),
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabs;

//icons

import home from "../assets/icons/BottomTab/homeIcon.png";
import homeOff from "../assets/icons/BottomTab/HomeOff.png";
import Article from "../assets/icons/BottomTab/ArticleIcon.png";
import ArticleOff from "../assets/icons/BottomTab/ArticleOff.png";
import Add from "../assets/icons/BottomTab/PlusIcon.png";
import Community from "../assets/icons/BottomTab/CommunityIcon.png";
import CommunityOff from "../assets/icons/BottomTab/CommunityOff.png";
import Settings from "../assets/icons/BottomTab/SettingsIcon.png";
import SettingsOff from "../assets/icons/BottomTab/SettingsOff.png";

const styles = StyleSheet.create({
  bottomTabsWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#eee",
    paddingVertical: 25,
    zIndex: 10,
  },
  bottomTab: {
    flex: 1,
    alignItems: "center",
  },
  addIconStyle: {
    // borderColor: "#000",
    // borderWidth: 1,
    position: "absolute",
    width: 120,
    height: 120,
    zIndex: 12,
    bottom: -50,
    overflow: "hidden",
  },
  icon: {
    width: 32,
    height: 32,
  },
});
