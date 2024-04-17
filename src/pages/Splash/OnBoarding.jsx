import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import BasicButton from "../../components/BasicButton";

const { width, height } = Dimensions.get("window");

//item rendering
const renderItem = ({ item }) => {
  return (
    <View style={styles.imgWrapper}>
      <Image source={item.img} style={styles.img} />
    </View>
  );
};

const OnBoarding = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const flatListRef = useRef();

  const onScroll = (e) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / width);
    setPage(newPage);
  };

  const nextHandler = () => {
    const nextPage = page + 1;
    // 다음 페이지가 존재하는지 확인
    if (nextPage < onboardingImgList.length) {
      // scrollToIndex 메서드를 사용하여 다음 페이지로 스크롤
      flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
      setPage(nextPage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenWrapper}>
        <FlatList
          data={onboardingImgList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          removeClippedSubviews
          style={styles.onboardingScreen}
          horizontal
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={width}
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
        />
      </View>
      {page !== 3 ? (
        <View style={styles.handler}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Skip</Text>
          </TouchableOpacity>
          <View style={styles.pageIndicators}>
            <View
              style={[styles.pageIndicator, page == 0 && styles.currentPage]}
            ></View>
            <View
              style={[styles.pageIndicator, page == 1 && styles.currentPage]}
            ></View>
            <View
              style={[styles.pageIndicator, page == 2 && styles.currentPage]}
            ></View>
            <View
              style={[styles.pageIndicator, page == 3 && styles.currentPage]}
            ></View>
          </View>
          <TouchableOpacity onPress={nextHandler}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <BasicButton
          text={"시작하기"}
          pressHandler={() => navigation.navigate("Login")}
        />
      )}
    </SafeAreaView>
  );
};

export default OnBoarding;

import onboarding1 from "../../assets/images/onboarding1.png";
import onboarding2 from "../../assets/images/onboarding2.png";
import onboarding3 from "../../assets/images/onboarding3.png";
import onboarding4 from "../../assets/images/onboarding4.png";

const onboardingImgList = [
  {
    id: 1,
    img: onboarding1,
  },
  {
    id: 2,
    img: onboarding2,
  },
  {
    id: 3,
    img: onboarding3,
  },
  {
    id: 4,
    img: onboarding4,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenWrapper: {
    marginTop: 80,
    marginBottom: 65,
  },
  onboardingScreen: {},
  //img
  imgWrapper: {
    width: width,
    alignItems: "center",
    height: height * 0.6,
  },
  img: {
    height: height * 0.6,
    aspectRatio: 1 / 2,
  },
  //handler
  handler: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 32,
  },
  pageIndicators: {
    flexDirection: "row",
    gap: 5,
  },
  pageIndicator: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: "#F9B566",
  },
  currentPage: {
    backgroundColor: "#573353",
  },
  //start btn
  startBtn: {
    width: width - 40,
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9B566",
  },
});
