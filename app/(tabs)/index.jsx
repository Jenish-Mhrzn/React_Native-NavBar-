import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import PROFILE_IMAGE from "@/constants/ProfileImage";
import { Link } from "expo-router";

const index = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: "#89e914ff" }}
    >
      <View>
        <Text style={styles.text}>About Me</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome !!</Text>
        <Image style={styles.image} source={PROFILE_IMAGE} />
        <Pressable>
          <Link href="/aboutme" style={styles.me}>
            See more about me
          </Link>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: "whitesmoke",
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    marginTop: 22,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  me: {
    fontSize: 20,
    marginTop: 20,
    backgroundColor: "rgba(23, 235, 250, 0.5)",
    padding: 20,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 50,
  },
});
