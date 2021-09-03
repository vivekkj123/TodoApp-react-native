import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo App by Vivek K J 🗒 </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#b3e0fa",
    padding: 10,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});
