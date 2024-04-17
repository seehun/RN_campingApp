import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import BasicButton from "../../../components/BasicButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log("1");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={loginBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flex: 1 }}></View>
        <View style={styles.wrapper}>
          <View style={styles.LoginBtns}>
            <TouchableOpacity style={styles.LoginBtn}>
              <View style={styles.LoginBtnWrapper}>
                <Image source={google} style={styles.icon} />
                <Text style={styles.LoginBtnText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginBtn}>
              <View style={styles.LoginBtnWrapper}>
                <Image source={facebook} style={styles.icon} />
                <Text style={styles.LoginBtnText}>Continue with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.emailLogin}>
            <View style={styles.inputGroup}>
              {/* email */}
              <View style={styles.inputWrapper}>
                <Image source={emailIcon} style={styles.emailIcon} />
                <TextInput
                  spellCheck={false}
                  autoCorrect={false}
                  autoCapitalize="none"
                  allowFontScaling={false}
                  style={styles.inputStyle}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
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
                  style={styles.inputStyle}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity>
                  <Text>Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            <BasicButton text={"로그인"} pressHandler={loginHandler} />
            {/* find password */}
            <View style={styles.findPasswordWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("FindPassword")}
              >
                <Text style={styles.findPasswordText}>비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.registerWrapper}>
              <Text style={styles.registerText}>아직 회원이 아니세요?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerBtnText}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
  wrapper: {
    flex: 1,
  },
  LoginBtns: {
    marginHorizontal: 30,
    gap: 8,
    marginBottom: 20,
  },
  LoginBtn: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 8,
  },
  LoginBtnWrapper: {
    flexDirection: "row",
    gap: 20,
    marginLeft: 32,
  },
  icon: {
    width: 32,
    height: 32,
  },
  LoginBtnText: {
    marginTop: 4,
  },
  //email
  emailLogin: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  inputGroup: {
    marginTop: 24,
    gap: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    height: 48,
    backgroundColor: "#FFF6ED",
    marginHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 12,
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
  //find password
  findPasswordWrapper: {
    marginTop: 12,
    alignItems: "center",
    marginBottom: 4,
  },
  findPasswordText: {
    fontSize: 12,
    color: "#573353",
    borderBottomWidth: 1,
    borderBottomColor: "#573353",
  },
  registerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 12,
    color: "#573353",
  },
  registerBtnText: {
    fontSize: 12,
    color: "#573353",
    fontWeight: "700",
  },
});

import loginBackground from "../../../assets/images/loginBackground.png";
import google from "../../../assets/icons/google.png";
import facebook from "../../../assets/icons/facebook.png";
import emailIcon from "../../../assets/icons/email.png";
import passwordIcon from "../../../assets/icons/password.png";
