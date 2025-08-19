import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";

const index = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}   style={{ flex: 1, backgroundColor: "#89e914ff" }} >
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize:20}}>Welcome to the Index</Text>
      </View>
    </ScrollView>
  );
};

export default index;

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
    marginTop:22,
  },
});
