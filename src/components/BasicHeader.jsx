import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const BasicHeader = ({ left, leftHandler, title, right, rightHandler }) => {
  return (
    <View style={styles.basicHeaderWrapper}>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <TouchableOpacity style={styles.headerBtn} onPress={leftHandler}>
          {left}
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        {right && (
          <TouchableOpacity style={styles.headerBtn} onPress={rightHandler}>
            {right}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default BasicHeader;

const styles = StyleSheet.create({
  basicHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  headerBtn: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(87, 51, 83,0.1)",
    borderRadius: 22,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#573353",
  },
});
