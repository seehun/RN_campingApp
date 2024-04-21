import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-paper";
import api from "../../api/axios.js";
import { baseURL } from "../../config.js";
import SelectDropdown from "react-native-select-dropdown";
import BasicHeader from "../../components/BasicHeader.jsx";
import { convertDate } from "../../utils.js";

const Article = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("FAVORITE");
  const [articleData, setArticleData] = useState([]);
  const articleHeader = () => {
    const categories = [
      { title: "즐겨찾기 순", value: "FAVORITE" },
      { title: "최신순", value: "LATEST" },
    ];
    return (
      <View>
        <View style={styles.header}>
          <ImageBackground
            source={article}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.headerTextWrapper}>
              <Text variant="titleLarge" style={styles.headerTitleText}>
                각종 캠핑 정보
              </Text>
              <View>
                <Text variant="bodySmall" style={styles.headerDetailText}>
                  캠핑윗미가 제공하는 각종 꿀팁으로
                </Text>
                <Text variant="bodySmall" style={styles.headerDetailText}>
                  캠핑을 더 풍성하게!
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Sort By:</Text>
          <SelectDropdown
            data={categories}
            onSelect={(selectedItem, index) => {
              setSelectedCategory(selectedItem.value);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || "즐겨찾기 순"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
      </View>
    );
  };
  const menuHandler = () => {};
  const searchHandler = () => {};

  useEffect(() => {
    const getArticle = async () => {
      const apiURL = "/article";
      const paramsData = {
        sortType: selectedCategory,
      };
      try {
        const response = await api.get(apiURL, { params: paramsData });
        // console.log(response.data.result);
        setArticleData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, []);

  useEffect(() => {
    const getArticle = async () => {
      const apiURL = "/article";
      const paramsData = {
        sortType: selectedCategory,
      };
      try {
        const response = await api.get(apiURL, { params: paramsData });
        // console.log(response.data.result);
        setArticleData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, [selectedCategory]);

  const renderItem = ({ item }) => {
    // console.log(baseURL + item.articleImages[0]?.imgPath);

    const bookmarkHandler = async () => {
      const apiURL = `/article/favorite/${item.id}`;
      const data = {
        id: item.id,
      };
      try {
        const response = await api.post(apiURL, data);
        console.log("bookmark", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const date = convertDate(item.createDate);

    return (
      <TouchableOpacity
        style={{ marginBottom: 8 }}
        onPress={() => {
          navigation.navigate("ArticleDetail", {
            params: { item: item },
          });
        }}
      >
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: baseURL + item.articleImages[0]?.imgPath }}
            style={styles.cardImg}
          />
          <Card.Content style={styles.cardInfo}>
            <View style={styles.cardTitle}>
              <Text variant="titleLarge" style={styles.cardTitle}>
                {item.title}
              </Text>
            </View>
            <View style={styles.cardDetail}>
              <Text
                variant="bodyMedium"
                style={styles.cardContent}
                numberOfLines={2}
              >
                {item.content}
              </Text>
              <View style={styles.cardBottom}>
                <Text variant="bodySmall" style={styles.cardDate}>
                  {date}
                </Text>
                <TouchableOpacity
                  style={styles.BookmarkBtn}
                  onPress={bookmarkHandler}
                >
                  <Image
                    source={bookmarkIcon}
                    style={{ width: 10, height: 13 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BasicHeader
          left={<Image source={menuIcon} style={{ width: 40, height: 40 }} />}
          leftHandler={menuHandler}
          title={"아티클"}
          right={
            <Image source={searchIcon} style={{ width: 20, height: 20 }} />
          }
          rightHandler={searchHandler}
        />
        <View style={styles.cardsContainer}>
          {articleData.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={articleHeader}
              data={articleData}
              renderItem={renderItem}
              removeClippedSubviews
              style={styles.cardList}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  wrapper: {
    marginHorizontal: 20,
  },
  //header
  image: {
    flex: 1,
  },
  header: {
    marginTop: 48,
    height: 146,
    marginBottom: 24,
  },
  headerTextWrapper: {
    marginVertical: 22,
    marginHorizontal: 25,
  },
  headerTitleText: {
    marginBottom: 30,
    color: "#573353",
    fontWeight: "700",
  },
  headerDetailText: {
    color: "#573353",
    fontWeight: "500",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryText: {
    color: "#573353",
    fontWeight: "500",
  },
  //dropdown button
  dropdownButtonStyle: {
    width: 200,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
    color: "#573353",
  },
  dropdownMenuStyle: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
    color: "#573353",
  },

  //card
  cardList: {
    marginBottom: 100,
  },
  card: {
    backgroundColor: "#fff",
  },
  cardImg: {
    marginBottom: 6,
    height: 148,
  },
  cardInfo: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#573353",
    marginBottom: 6,
  },
  cardContent: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 4,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BookmarkBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(87, 51, 83,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardDate: {
    color: "#573353",
    fontWeight: "500",
    fontSize: 12,
  },
});

import menuIcon from "../../assets/icons/HamburgerMenu.png";
import searchIcon from "../../assets/icons/search.png";
import bookmarkIcon from "../../assets/icons/bookmark.png";
import article from "../../assets/images/Article.png";
