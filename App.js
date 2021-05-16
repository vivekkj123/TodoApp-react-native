import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import BottomBar from "./components/BottomBar.js";
import Header from "./components/Header.js";
import TodoComponent from "./components/TodoComponent.js";
export default function App() {
  const [todo, settodo] = useState([]);
  const addTodo = (text) => {
    if (text == "") {
      null;
    } else {
      const newTodos = [{ id: Math.random().toString(), item: text }, ...todo];
      settodo(newTodos);
    }
  };
  const DeleteTodo = (id) => {
    var newTodo = todo.filter((item) => {
      return item.id !== id;
    });
    settodo(newTodo);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={todo}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(todo) => {
          return (
            <TodoComponent
              style={styles.Todolist}
              todo={todo.item}
              DeleteTodo={DeleteTodo}
            />
          );
        }}
      />
      <BottomBar addTodo={addTodo} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61CBFF",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  Todolist: {
    flex: 1,
  },
});
