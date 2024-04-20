import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "react-native-paper";

import BasicHeader from "../../components/BasicHeader";

const CampingDetail = ({ navigation, route }) => {
  const { item } = route.params.params;
  const callHandler = () => {};
  // console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <BasicHeader
          left={<Image source={backIcon} style={{ width: 16, height: 12 }} />}
          leftHandler={() => navigation.goBack()}
          title={"캠핑장 상세 정보"}
        />
      </View>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.firstImageUrl }} style={styles.itemImg} />
        <View style={styles.itemInfoWrapper}>
          <View style={styles.itemManageInfo}>
            <Text variant="bodySmall" style={styles.itemManageInfoText}>
              {item.facltDivNm}
            </Text>
            <View style={styles.line}></View>
            <Text variant="bodySmall" style={styles.itemManageInfoText}>
              {item.mangeDivNm}
            </Text>
          </View>
          <View style={styles.itemTitle}>
            <Text variant="titleMedium" style={{ fontWeight: "700" }}>
              {item.facltNm}
            </Text>
            <Text
              variant="bodyMedium"
              style={{ color: "#919191", fontWeight: "700" }}
            >
              {item.resveCl}
            </Text>
          </View>
          <Text variant="bodySmall" style={styles.address}>
            {item.addr1}
          </Text>
          <Text variant="bodyMedium" style={styles.have}>
            {item.caravInnerFclty}
          </Text>
          {item.intro && (
            <Text variant="bodySmall" style={styles.address}>
              소개 및 안내
            </Text>
          )}

          <Text variant="bodySmall" style={styles.detailInfo}>
            {item.intro}
          </Text>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.callBtn} onPress={callHandler}>
          <Text variant="bodyMedium" style={styles.callText}>
            전화하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CampingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  headerWrapper: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  //item
  itemContainer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  itemImg: {
    height: 250,
    marginBottom: 38,
  },
  itemInfoWrapper: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 8,
  },
  itemManageInfo: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginBottom: 8,
  },
  itemManageInfoText: {
    color: "#FC9D45",
    fontWeight: "700",
    fontSize: 13,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "#C8C8C8",
    height: 8,
    color: "#C8C8C8",
  },
  itemTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  address: {
    fontSize: 13,
    color: "#707070",
    marginBottom: 8,
  },
  have: {
    color: "#383838",
    fontWeight: "700",
    marginBottom: 20,
  },
  detailInfo: {
    fontSize: 13,
    fontWeight: "700",
    color: "#383838",
  },
  //bottom
  bottomWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  callBtn: {
    backgroundColor: "#FC9D45",
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 8,
  },
  callText: {
    color: "#573353",
    fontSize: 17,
    fontWeight: "700",
  },
});

import backIcon from "../../assets/icons/back.png";
