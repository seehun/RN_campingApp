import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

import api from "../../api/axios.js";

const Home = () => {
  useEffect(() => {
    const init = async () => {
      const apiURL = "accounts/info";
      const response = await api.get(apiURL);
      console.log(response.data);
    };
    init();
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
