import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../shared/color";
import { useNavigation } from "@react-navigation/native";

export default function HeadLineList({ newsList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 25 }}>
        
      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate("readNews", { news: item })}
          style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{ uri: item.urlToImage }}
            />
            <View style={styles.textContainer}>
              <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
              <Text style={styles.name}>{item?.source.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 3,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    color: color.primary,
  },
});
