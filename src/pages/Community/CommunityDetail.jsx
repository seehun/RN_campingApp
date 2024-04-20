import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import BasicHeader from "../../components/BasicHeader";
import { convertDate } from "../../utils";

const CommunityDetail = ({ navigation, route }) => {
  const { item } = route.params.params;
  const renderItem = ({ item }) => {
    const date = convertDate(item.createDate);
    return (
      <View style={styles.reply}>
        <Text style={styles.replyNickname}>{item.nickname}</Text>
        <Text style={styles.replyTime}>{date}</Text>
        <Text style={styles.replyContent}>{item.reply}</Text>
      </View>
    );
  };
  console.log("item", item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BasicHeader
          left={<Image source={backIcon} style={{ width: 16, height: 12 }} />}
          leftHandler={() => navigation.goBack()}
          title={"상세 보기"}
        />
        <View style={styles.communityDetailContainer}>
          <View style={styles.communityDetailWrapper}>
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
              <Text style={styles.bodyText}>{item.subject}</Text>
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
            <View style={styles.cardReplyWrapper}>
              <Text style={styles.cardReplyTitle}>댓글</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={item.replys}
              renderItem={renderItem}
              removeClippedSubviews
              style={styles.replyContainer}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommunityDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  wrapper: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  communityDetailContainer: {
    height: 660,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 24,
  },
  communityDetailWrapper: {
    flex: 1,
    marginVertical: 12,
    // marginHorizontal: 10,
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
    height: 100,
    marginHorizontal: 16,
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
  cardReplyWrapper: {
    marginHorizontal: 16,
  },
  cardReplyTitle: {
    color: "#573353",
    fontSize: 16,
    fontWeight: "500",
  },
  //reply
  replyContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  reply: {
    marginBottom: 16,
  },
  replyNickname: {
    color: "#573353",
    fontWeight: "700",
    fontSize: 14,
  },
  replyTime: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 12,
  },
  replyContent: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 14,
  },
});

import shareIcon from "../../assets/icons/goDetail.png";
import backIcon from "../../assets/icons/back.png";
import like from "../../assets/icons/like.png";
import reply from "../../assets/icons/reply.png";
