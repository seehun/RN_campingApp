import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import BasicHeader from "../../components/BasicHeader";
import api from "../../api/axios.js";

const Add = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createNewCommunity = async () => {
    console.log(title, content);

    const userData = {
      subject: title,
      content,
    };
    const apiURL = "/community";
    try {
      const response = await api.post(apiURL, userData);
      console.log(response.data);
      if (response.data.success) {
        navigation.navigate("MainTab");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <BasicHeader
          left={<Image source={backIcon} style={{ width: 16, height: 12 }} />}
          leftHandler={() => navigation.goBack()}
          title={"새 글쓰기"}
          right={<Image source={Edit} style={{ width: 17, height: 17 }} />}
          rightHandler={createNewCommunity}
        />
        <View style={styles.contentWrapper}>
          <TextInput
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            value={title}
            onChangeText={(text) => setTitle(text)}
            allowFontScaling={false}
            style={styles.titleInputStyle}
            autoFocus
            placeholder="title"
          />
          <View style={styles.contentInputWrapper}>
            <TextInput
              spellCheck={false}
              autoCorrect={false}
              autoCapitalize="none"
              value={content}
              onChangeText={(text) => setContent(text)}
              allowFontScaling={false}
              style={styles.contentInputStyle}
              multiline
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6ED",
  },
  wrapper: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  contentWrapper: {
    marginTop: 24,
    height: 600,
  },
  headerContainer: {
    height: 68,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
    gap: 16,
  },
  titleInputStyle: {
    width: 310,
    height: 54,
    paddingRight: 12,
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 38,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 8,
  },
  contentInputWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  contentInputStyle: {
    flex: 1,
    color: "#000",
    fontSize: 14,
    marginHorizontal: 12,
    marginVertical: 12,
  },
});

import backIcon from "../../assets/icons/back.png";
import Edit from "../../assets/icons/Edit.png";
