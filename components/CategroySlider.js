import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import color from "../shared/color";

const categoryList = [
  { id: "1", name: "Latest" },
  { id: "2", name: "Business" },
  { id: "3", name: "World" },
  { id: "4", name: "Sports" },
  { id: "5", name: "Life" },
  { id: "6", name: "Movie" },
];

export default function CategorySlider() {
  const [active, setActive] = useState(1);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setActive(item.id)}>
            <Text style={item.id == active ? styles.listsId : styles.lists}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lists: {
    marginRight: 20,
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
  },

  listsId: {
    marginRight: 20,
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
    color: color.primary,
  },
});
