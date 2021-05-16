import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TodoComponent = ({ todo, DeleteTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText} key={todo.id}>
        {todo.item}
      </Text>
      <TouchableOpacity
        onPress={() => {
          DeleteTodo(todo.id);
        }}
      >
        <Ionicons name="trash-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoComponent;

const styles = StyleSheet.create({
  todoItem: {
    margin: 15,
    backgroundColor: "#B0E6FF",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    fontSize: 20,
  },
});
