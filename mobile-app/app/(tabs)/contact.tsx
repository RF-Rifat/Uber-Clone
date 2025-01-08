import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>contact</Text>
      <Link href="/" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D3D47",
  },
  text: {
    fontSize: 46,
    color: "white",
  },
  button: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
  },
});
