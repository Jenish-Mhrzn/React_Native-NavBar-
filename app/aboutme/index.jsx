import { View, Text, ScrollView, StyleSheet, Pressable} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={{ flex: 1, backgroundColor: "#89e914ff" }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Hello my name is Malik Maharjan!</Text>
        <Text>U wanna see more then click below </Text>
        <Pressable>
          <Link style={styles.me} href="/aboutme/1" >
            Click here
          </Link>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center", // vertical centering
    alignItems: "center", // horizontal centering
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center", // centers text inside the Text component
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
