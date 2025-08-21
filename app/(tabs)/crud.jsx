import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from storage on app start
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("tasks");
        if (savedTasks) setTask(JSON.parse(savedTasks));
      } catch (e) {
        console.log("Failed to load tasks", e);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to storage whenever task changes
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(task));
      } catch (e) {
        console.log("Failed to save tasks", e);
      }
    };
    saveTasks();
  }, [task]);

  function add() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function remove(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function handlemoveup(index) {
    if (index > 0) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index],
      ];
      setTask(updatedtask);
    }
  }

  function handlemovedown(index) {
    if (index < task.length - 1) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index],
      ];
      setTask(updatedtask);
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.topic}>CRUD OPERATION</Text>
        <View>
          <TextInput
            style={styles.input}
            value={newTask}
            onChangeText={setNewTask}
            placeholder="write here..."
          />
          <Button title="ADD" onPress={add} />
        </View>

        <FlatList
          data={task}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.items}>
              <Text style={styles.text}>{item}</Text>
              <View style={styles.btn_row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handlemoveup(index)}
                >
                  <Text>⬆️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handlemovedown(index)}
                >
                  <Text>⬇️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => remove(index)}
                >
                  <Text>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  topic: {
    textAlign: "center",
    fontSize: 35,
    marginTop: 10,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f26a6aff",
  },
  input: {
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  btn_row: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
  },
});
