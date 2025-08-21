import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const moredatail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Just kidding nothing here to see </Text>
    </View>
  );
};

export default moredatail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
        alignItems: "center",
    backgroundColor:"#89e914ff",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
