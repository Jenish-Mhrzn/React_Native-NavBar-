import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabBar({ state, descriptors, navigation }) {
  const icon = {
    index: (props) => <AntDesign name="home" size={26} {...props} />,
    crud: (props) => <MaterialIcons name="explore" size={26} {...props} />,
    contact: (props) => <AntDesign name="contacts" size={26} {...props} />,
    setting: (props) => <AntDesign name="setting" size={26} {...props} />,
  };
  return (
    <View
      style={styles.tabbar}
      //   style={{ flexDirection: "row", backgroundColor: "white", padding: 5 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", padding: 10 }}
          >
            {icon[route.name]({
              color: isFocused ? "blue" : "gray",
            })}
            <Text style={{ color: isFocused ? "blue" : "gray" }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 20,
    marginBottom: 25,
    margin: 10,
    boxShadow: "0 0 3px purple",
    fontSize: "12px",
    backgroundColor: "white",
  },
});
