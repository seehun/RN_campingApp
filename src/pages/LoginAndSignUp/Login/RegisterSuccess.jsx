import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import BasicButton from "../../../components/BasicButton";

import successRegister from "../../../assets/images/successRegister.png";

const RegisterSuccess = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={successRegister} />
      </View>
      <View style={styles.contents}>
        <View style={styles.infos}>
          <Text style={styles.infoTitle}>회원가입 성공!</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.infoDetail}>
              각종 캠핑 정보부터 커뮤니티까지,
            </Text>
            <Text tyle={styles.infoDetail}>캠핑윗미와 함께 하세요!</Text>
          </View>
        </View>
        <BasicButton
          text={"로그인 하러가기"}
          pressHandler={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 2,
    alignItems: "center",
  },
  contents: {
    flex: 3,
  },
  infos: {
    alignItems: "center",
    gap: 8,
    marginBottom: 56,
  },
  infoTitle: {
    color: "#573353",
    fontWeight: "700",
    fontSize: 24,
  },
  infoDetail: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
  },
});
