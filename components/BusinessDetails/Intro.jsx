import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Intro = ({ business }) => {
  console.log(business);
  return (
    <View style={styles.container}>
      <Text>jfsdkj</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    margin: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    marginBottom: 8,
  },
  website: {
    fontSize: 14,
    color: "blue",
  },
});
