import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3153A4",
    width: "25%",
    padding: 15,
    marginHorizontal: 85,
    marginVertical: 25,
    alignItems: "center",
    borderRadius: 15,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomButton;
