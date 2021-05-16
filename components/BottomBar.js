import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const BottomBar = ({ addTodo }) => {
  const [text, settext] = useState("");

  return (
    <View>
      <TextInput value={text} onChangeText={settext} style={styles.input} />

      <Button
        onPress={() => {
          addTodo(text);
          settext("");
        }}
        style={styles.addbtn}
        title="Add"
      />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    marginTop: "auto",
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#ffff",
  },
});
