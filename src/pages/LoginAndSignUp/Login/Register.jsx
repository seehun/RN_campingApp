import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import axios from "axios";
import Toast from "react-native-toast-message";

import api from "../../../api/axios";

import { baseURL } from "../../../config";
import BasicButton from "../../../components/BasicButton";

const Register = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("01012341234");

  const [autoLogin, setAutoLogin] = useState(false);
  const [agree, setAgree] = useState(false);

  const registerHandler = async () => {
    if (!agree) {
      Toast.show({
        type: "info",
        text1: "약관 동의가 필요합니다",
      });
      return;
    }
    if (!email || !password || !nickname) {
      Toast.show({
        type: "info",
        text1: "빈 칸을 다 채워주세요!",
      });
      return;
    }
    const userData = {
      email,
      password,
      nickname,
      phoneNumber,
    };
    const apiURL = "/accounts";
    try {
      const response = await api.post(apiURL, userData);
      console.log(response.data);
      if (response.data.success) {
        navigation.navigate("RegisterSuccess");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Toast />
      <View style={styles.headerImageWrapper}>
        <Image source={register}></Image>
      </View>
      <View style={styles.registerWrapper}>
        <View style={styles.inputGroup}>
          {/* nickname */}
          <View style={styles.inputWrapper}>
            <Image source={userIcon} style={styles.userIcon} />
            <TextInput
              spellCheck={false}
              autoCorrect={false}
              autoCapitalize="none"
              allowFontScaling={false}
              style={styles.inputStyle}
              value={nickname}
              onChangeText={(text) => setNickname(text)}
              placeholder="nickname"
            />
          </View>
          {/* email */}
          <View style={styles.inputWrapper}>
            <Image source={registerEmailIcon} style={styles.emailIcon} />
            <TextInput
              spellCheck={false}
              autoCorrect={false}
              autoCapitalize="none"
              allowFontScaling={false}
              style={[styles.inputStyle, styles.textColor]}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="email"
            />
          </View>
          {/* password */}
          <View style={[styles.inputWrapper, { marginBottom: 12 }]}>
            <Image source={passwordIcon} style={styles.passwordIcon} />
            <TextInput
              spellCheck={false}
              autoCorrect={false}
              autoCapitalize="none"
              allowFontScaling={false}
              style={[styles.inputStyle, styles.textColor]}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
            />
            <TouchableOpacity>
              <Text>Show</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* check box */}
        <View style={styles.checkboxGroup}>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              onClick={() => setAutoLogin(!autoLogin)}
              isChecked={autoLogin}
              checkedCheckBoxColor={"#FDA758"}
            />
            <Text style={styles.checkboxText}>자동 로그인</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              onClick={() => setAgree(!agree)}
              isChecked={agree}
              checkedCheckBoxColor={"#FDA758"}
            />
            <Text style={styles.checkboxText}>약관 동의</Text>
          </View>
        </View>
        <BasicButton text={"회원가입"} pressHandler={registerHandler} />
        {/* google or facebook */}
        <View style={styles.lineWrapper}>
          <View style={styles.line}></View>
          <Text style={styles.lineText}>Or Sign in with</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.BtnGroup}>
          <TouchableOpacity style={styles.Btn}>
            <Image source={google} style={styles.icon} />
            <Text style={{ marginTop: 8 }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn}>
            <Image source={facebook} style={styles.icon} />
            <Text style={{ marginTop: 8 }}>FaceBook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.loginText}>회원이세요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginBtnText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  headerImageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerWrapper: {
    flex: 2,
  },
  //input
  inputGroup: {
    marginTop: 24,
    gap: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    height: 48,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 12,
  },
  userIcon: {
    width: 14,
    height: 16,
  },
  emailIcon: {
    width: 15,
    height: 12,
  },
  passwordIcon: {
    width: 12,
    height: 16,
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
  textColor: {
    color: "#573353",
  },
  //checkbox
  checkboxGroup: {
    marginHorizontal: 30,
    gap: 8,
    marginBottom: 12,
  },
  checkboxText: {
    color: "#573353",
    fontSize: 14,
  },
  checkboxWrapper: {
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  //google or facebook
  lineWrapper: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 30,
  },
  line: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#573353",
  },
  lineText: {
    marginHorizontal: 6,
    color: "#573353",
    fontSize: 12,
  },
  BtnGroup: {
    flexDirection: "row",
    marginHorizontal: 30,
    gap: 12,
    marginBottom: 24,
  },
  icon: {
    width: 40,
    height: 40,
  },
  Btn: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  //login
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

import register from "../../../assets/images/register.png";
import registerEmailIcon from "../../../assets/icons/registerEmail.png";
import passwordIcon from "../../../assets/icons/password.png";
import userIcon from "../../../assets/icons/user.png";
import google from "../../../assets/icons/google.png";
import facebook from "../../../assets/icons/facebook.png";
