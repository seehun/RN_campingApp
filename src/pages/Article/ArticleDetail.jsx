import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import BasicHeader from "../../components/BasicHeader";
import { baseURL } from "../../config";

const ArticleDetail = ({ navigation, route }) => {
  const { item } = route.params.params;
  //   console.log(item);
  const bookmarkHandler = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <BasicHeader
          left={<Image source={backIcon} style={{ width: 16, height: 12 }} />}
          leftHandler={() => navigation.goBack()}
          title={"아티클 상세"}
          right={
            <Image source={bookmarkIcon} style={{ width: 12, height: 16 }} />
          }
          rightHandler={bookmarkHandler}
        />
      </View>
      <Image
        source={{ uri: baseURL + item.articleImages[0]?.imgPath }}
        style={styles.itemImg}
      />
      <ScrollView
        style={styles.itemContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.itemInfoWrapper}>
          <Text variant="titleLarge" style={styles.title}>
            {item.title}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text variant="bodySmall" style={styles.date}>
              {item.createDate}
            </Text>
          </View>
          <Text variant="bodyMedium" style={styles.content}>
            {item.content}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  headerWrapper: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  itemImg: {
    marginHorizontal: 20,
    height: 200,
    marginBottom: 38,
    backgroundColor: "rgba(87, 51, 83,0.1)",
    borderRadius: 16,
    marginBottom: 14,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  itemInfoWrapper: {
    marginHorizontal: 20,
    marginVertical: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#573353",
    marginBottom: 6,
  },
  date: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 11,
    marginBottom: 12,
  },
  content: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 12,
    marginBottom: 4,
    lineHeight: 14,
  },
});

import backIcon from "../../assets/icons/back.png";
import bookmarkIcon from "../../assets/icons/bookmark.png";
