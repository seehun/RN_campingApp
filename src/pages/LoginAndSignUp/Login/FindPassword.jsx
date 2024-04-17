import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import findPassword from "../../../assets/images/findPassword.png";
import backIcon from "../../../assets/icons/back.png";

const { width, height } = Dimensions.get("window");

const FindPassword = ({ navigation }) => {
  const findPasswordHandler = () => {};

  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image source={backIcon} style={{ width: 16, height: 12 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={findPassword} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputTextWrapper}>
            <Text style={styles.inputText}>등록된 이메일로</Text>
            <Text style={styles.inputText}>
              비밀번호 변경 메일을 발송합니다.
            </Text>
          </View>
          <View style={styles.InputAndBtn}>
            <View style={styles.input}>
              <TextInput
                spellCheck={false}
                autoCorrect={false}
                autoCapitalize="none"
                allowFontScaling={false}
                style={styles.inputStyle}
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoFocus
              />
            </View>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={findPasswordHandler}
            >
              <Text>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.loginText}>비밀번호가 기억났나요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginBtnText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FindPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  header: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  backBtn: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(87, 51, 83,0.1)",
    borderRadius: 22,
  },
  //image
  imageWrapper: {
    flex: 3,
    marginHorizontal: 20,
    alignItems: "center",
  },
  //input
  inputContainer: {
    flex: 3,
    marginHorizontal: 20,
  },
  inputWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 56,
  },
  inputTextWrapper: {
    alignItems: "center",
    gap: 4,
    marginBottom: 20,
  },
  inputText: {
    color: "#573353",
    fontSize: 14,
  },
  InputAndBtn: {
    gap: 8,
  },
  input: {
    flexDirection: "row",
    height: 48,
    backgroundColor: "#FFF6ED",
    borderRadius: 12,
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 12,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    color: "#FDA758",
    fontSize: 14,
    fontWeight: "400",
    alignItems: "center",
  },
  startBtn: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9B566",
  },
  loginWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 12,
    color: "#573353",
  },
  loginBtnText: {
    fontSize: 12,
    color: "#573353",
    fontWeight: "700",
  },
});
