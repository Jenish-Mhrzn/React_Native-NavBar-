import { ScrollView, View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

const contact = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1, backgroundColor: "#6a87efff" }}
    >
      <View>
        <Text style={styles.text}>Contact List</Text>
      </View>

      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: "A",
              data: [
                "Alexander",
                "Amelia",
                "Andrew",
                "Ava",
                "Anthony",
                "Abigail",
              ],
            },
            { title: "D", data: ["Devin", "Dan", "Dominic"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie",
              ],
            },
            {
              title: "M",
              data: [
                "Michael",
                "Michelle",
                "Matthew",
                "Megan",
                "Mason",
                "Madison",
              ],
            },
            {
              title: "S",
              data: [
                "Sophia",
                "Samuel",
                "Scarlett",
                "Sebastian",
                "Stella",
                "Steven",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => `basicListEntry-${item}`}
        />
      </View>
    </ScrollView>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    marginTop: 22,
  },
  item: {
    fontSize: 25,
    paddingLeft: 20,
  },
  sectionHeader: {
    fontSize: 30,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingLeft: 20,
    borderRadius: 15,
    marginTop:10,
  },
});
