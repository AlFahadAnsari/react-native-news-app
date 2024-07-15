import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import color from "../shared/color";
import { FontAwesome6 } from "@expo/vector-icons";
import CategroySlider from "./CategroySlider";
import TopHeadline from "./TopHeadline";
import HeadLineList from "./HeadLineList";
import GlobalApi from "../Api/GlobalApi";

export default function Home() {
  const [newsList, setNewsList] = useState([]);

  const getHeadLine = async () => {
    try {
      const res = await GlobalApi.GetTopHeadLine;
      setNewsList(res.data.articles);
    } catch (err) {}
  };

  useEffect(() => {
    getHeadLine();
  }, []); // Empty dependency array to run only once

  return (
    <ScrollView
      style={{ backgroundColor: "#ffff" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.head}>
        <Text style={styles.name}>Pandiya News</Text>
        <FontAwesome6
          style={{ marginTop: 20 }}
          name="bell"
          size={24}
          color="black"
        />
      </View>

      <View>
        {/* ! Category Slider */}
        <CategroySlider />

        {/* ! Top Headline Slider */}
        <TopHeadline newsList={newsList} />

        {/* HeadlineList */}
        <HeadLineList newsList={newsList} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  name: {
    color: color.primary,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});
