import { Link, Redirect } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return <Redirect href={"/home"} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
