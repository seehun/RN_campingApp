import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const BasicButton = ({ text, pressHandler }) => {
  return (
    <View style={{ width: width, alignItems: "center" }}>
      <TouchableOpacity style={styles.startBtn} onPress={() => pressHandler()}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  startBtn: {
    width: width - 60,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9B566",
  },
});
