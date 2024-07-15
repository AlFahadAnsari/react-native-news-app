import { View, Text, Image, StyleSheet, Share } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import color from "../shared/color";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function ReadNews() {
  const route = useRoute();
  const news = route.params.news;

  const navi = useNavigation();


  const ShareNews =()=>{
    Share.share({
      message: news.title+"\nread More" + news.description 
    })
  }
  return (
    <View style={styles.container}>
      {/* expo icon */}

      <View style={styles.icon}>
        {/* BACK */}
        <TouchableOpacity onPress={() => navi.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity onPress={()=>ShareNews()}>
          <Entypo name="share-alternative" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* content */}
      <Image source={{ uri: news.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.name}>{news.source.name}</Text>
      <Text style={styles.desc}>{news.description}</Text>


      <Text style={styles.readmore} onPress={()=>Linking.openURL(news.url)}>Read More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  icon: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 10,
    color: color.primary,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    // marginBottom: ,
    marginTop: 10,
    color: "#333",
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    lineHeight: 30,
  },
  readmore: {
  backgroundColor:color.primary,
  padding:10,
  marginTop:20,
  textAlign:"center",
  color:"white",
  borderRadius:10    
  },
});
