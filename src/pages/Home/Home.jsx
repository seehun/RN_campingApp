import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Text } from "react-native-paper";

import campingApi from "../../api/campingAxios.js";
import { encode_APIKEY } from "../../config.js";

import BasicHeader from "../../components/BasicHeader.jsx";
import useStore from "../../store.js";

const Home = ({ navigation }) => {
  const [campingData, setCampingData] = useState([]);
  const { user } = useStore((state) => state);
  console.log("1", user);
  useEffect(() => {
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
          // console.log(response.data.response.body.items.item);
          setCampingData(response.data.response.body.items.item);
        }
      } catch (error) {
        // console.log(error);
        initCamping();
      }
    };
    initCamping();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 8 }}
        onPress={() => {
          navigation.navigate("CampingDetail", {
            params: { item: item },
          });
        }}
      >
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: item.firstImageUrl }}
            style={styles.cardImg}
          />
          <Card.Content style={styles.cardInfo}>
            <View style={styles.cardTitle}>
              <Text variant="bodySmall" style={{ color: "#919191" }}>
                {`${item.facltDivNm} ${item.mangeDivNm}`}
              </Text>
              <Text variant="titleMedium">{item.facltNm}</Text>
            </View>
            <View style={styles.cardDetail}>
              <Text variant="bodySmall" style={styles.address}>
                {item.addr1}
              </Text>
              <Text variant="bodyLarge" style={styles.reservation}>
                {item.resveCl}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
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
        <ScrollView style={styles.cardsContainer}>
          {campingData.length > 0 && (
            <FlatList
              data={campingData}
              renderItem={renderItem}
              keyExtractor={(item) => item.contentId}
              removeClippedSubviews
            />
          )}
        </ScrollView>
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
  //card
  cardsContainer: {
    marginTop: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 8,
  },
  cardImg: {
    marginBottom: 6,
    height: 148,
  },
  cardTitle: {
    marginBottom: 24,
  },
  cardDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  address: {
    color: "#707070",
  },
  reservation: {
    color: "#FC9D45",
    fontWeight: "700",
  },
});

import menuIcon from "../../assets/icons/HamburgerMenu.png";
