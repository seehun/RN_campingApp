import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import useStore from "../../../store";
import api from "../../../api/axios.js";

const LoginMiddleware = ({ navigation }) => {
  const { initUserState } = useStore((state) => state);

  useEffect(() => {
    const init = async () => {
      const apiURL = "/accounts/info";
      const response = await api.get(apiURL);
      //   console.log(response.data);
      if (response.data.success) {
        initUserState(response.data.result);
        navigation.navigate("MainTab");
      }
    };
    init();
  }, []);
  return <View></View>;
};

export default LoginMiddleware;

const styles = StyleSheet.create({});
