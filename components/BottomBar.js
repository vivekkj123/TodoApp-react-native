import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomBar = ({ addTodo }) => {
  const [text, settext] = useState("");

  return (
    <View style={styles.view}>
      <TextInput value={text} onChangeText={settext} style={styles.input} />
      <TouchableOpacity
        style={styles.addbtn}
        onPress={() => {
          addTodo(text);
          settext("");
        }}
      >
        <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    margin: 15,
    marginTop: "auto",
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#ffff",
    paddingHorizontal: 10,
  },
  addbtn: {
    height: 50,
    marginTop: "auto",
    marginBottom: 16,
  },
});
