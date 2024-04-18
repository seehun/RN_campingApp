import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";

import api from "../../api/axios.js";
import campingApi from "../../api/campingAxios.js";
import { encode_APIKEY } from "../../config.js";
import { decode_APIKEY } from "../../config.js";

import BasicHeader from "../../components/BasicHeader.jsx";
import menuIcon from "../../assets/icons/HamburgerMenu.png";

const Home = ({ navigation }) => {
  useEffect(() => {
    //user data  -> 전역상태로 저장시켜야됨.
    // const init = async () => {
    //   const apiURL = "/accounts/info";
    //   const response = await api.get(apiURL);
    //   console.log(response.data);
    // };
    // init();
    //
    //camping
    const initCamping = async () => {
      const apiURL = "/basedList";
      const paramsData = {
        numOfRows: 10,
        pageNo: 1,
        MobileOS: " IOS",
        MobileApp: "a",
        serviceKey: encode_APIKEY,
        _type: "json",
      };
      try {
        const response = await campingApi.get(apiURL, { params: paramsData });
        if (response.data.response.body) {
          console.log(response.data.response.body.items);
        }
      } catch (error) {
        console.log(error);
        initCamping();
      }
    };
    initCamping();
  }, []);

  const menuHandler = () => {
    console.log(1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BasicHeader
          left={<Image source={menuIcon} style={{ width: 40, height: 40 }} />}
          leftHandler={menuHandler}
          title={"캠핑윗미"}
        />
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  wrapper: {
    marginHorizontal: 20,
  },
  //header
  basicHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
