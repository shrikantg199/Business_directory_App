import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const About = ({ business }) => {
  return (
    <View>
      <View
        style={{ backgroundColor: colors.white, padding: 20}}
      >
        <Text style={{ fontWeight: 800, fontSize: 22 }}>About</Text>
        <Text>{business?.about}</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
