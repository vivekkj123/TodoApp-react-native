import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TodoComponent = ({ todo, DeleteTodo }) => {
  const [Strike, setStrike] = useState(false);
  return (
    <View style={styles.todoItem}>
      <Text
        style={!Strike ? styles.todoText : [styles.todoText, styles.strikeTodo]}
        key={todo.id}
      >
        {todo.item}{" "}
      </Text>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            setStrike(true);
          }}
        >
          <Ionicons name="checkmark-circle-outline" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            DeleteTodo(todo.id);
          }}
        >
          <Ionicons name="trash-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoComponent;

const styles = StyleSheet.create({
  todoItem: {
    margin: 15,
    backgroundColor: "#ffff",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    fontSize: 20,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
  strikeTodo: {
    textDecorationLine: "line-through",
  },
});
