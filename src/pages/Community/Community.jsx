import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import useStore from "../../store.js";
import api from "../../api/axios.js";
import BasicHeader from "../../components/BasicHeader.jsx";

const Community = ({ navigation, route }) => {
  const { user } = useStore((state) => state);
  // console.log("1", user);
  const [communityeData, setCommunityeData] = useState([]);
  const menuHandler = () => {};

  useEffect(() => {
    const getArticle = async () => {
      const apiURL = "/community";
      const paramsData = {
        page: 0,
        pageSize: 10,
      };
      try {
        const response = await api.get(apiURL, { params: paramsData });
        console.log(response.data.result.content);
        setCommunityeData(response.data.result.content);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("CommunityDetail", {
            params: { item: item },
          })
        }
      >
        <View style={styles.cardHeaderWrapper}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Text style={styles.cardNickname}>{item.nickname}</Text>
            </View>
            <TouchableOpacity style={styles.cardHeaderRight}>
              <Image source={shareIcon} style={{ width: 18, height: 16 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderWidth: 0.5, borderColor: "#FFF6ED" }}></View>
        <View style={styles.cardBodyWrapper}>
          <View>
            <Text style={styles.bodyText}>{item.subject}</Text>
          </View>

          <View style={styles.bottomFeatures}>
            <TouchableOpacity style={styles.likes}>
              <Image source={like} style={{ width: 16, height: 14 }} />
              <Text>{item.like}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.replys}>
              <Image source={reply} style={{ width: 15, height: 15 }} />
              <Text>{item.replyCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BasicHeader
          left={<Image source={menuIcon} style={{ width: 40, height: 40 }} />}
          leftHandler={menuHandler}
          title={"커뮤니티"}
          right={
            user.profileImagePath ? (
              <Image
                source={{ uri: user.profileImagePath }}
                style={{ width: 44, height: 44 }}
              />
            ) : (
              <Image source={basicProfile} style={{ width: 44, height: 44 }} />
            )
          }
        />
        <ScrollView
          style={styles.cardsContainer}
          showsVerticalScrollIndicator={false}
        >
          {communityeData.length > 0 ? (
            <FlatList
              data={communityeData}
              renderItem={renderItem}
              removeClippedSubviews
              style={styles.cardList}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  wrapper: {
    marginHorizontal: 20,
  },
  cardsContainer: {
    marginTop: 42,
    // flex: 1,
    minHeight: 600,
  },
  //card
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 156,
    marginBottom: 8,
  },
  cardHeaderWrapper: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNickname: {
    fontSize: 18,
    fontWeight: "700",
    color: "#573353",
  },
  cardHeaderRight: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(87, 51, 83,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBodyWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 12,
    justifyContent: "space-between",
  },
  bodyText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#573353",
  },
  bottomFeatures: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 16,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  replys: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

import menuIcon from "../../assets/icons/HamburgerMenu.png";
import basicProfile from "../../assets/images/basicProfile.jpeg";
import shareIcon from "../../assets/icons/goDetail.png";
import like from "../../assets/icons/like.png";
import reply from "../../assets/icons/reply.png";
