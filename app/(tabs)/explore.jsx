import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1, backgroundColor: "#e2e914ff" }}>
      <View>
        <Text style={styles.text}>Explore</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Welcome to the Explore</Text>
      </View>
    </ScrollView>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    marginTop: 22,
  },
});
