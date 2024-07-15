import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import color from "../shared/color";
import { useNavigation } from "@react-navigation/native";

export default function TopHeadline({ newsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("readNews", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginTop: 20,
              marginRight: 20,
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: item.urlToImage }}
              alt="something wrong"
            />
            <Text numberOfLines={3} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.name}>{item?.source.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("screen").width * 0.77,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  name: {
    color: color.primary,
  },
});
