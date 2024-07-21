import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import UserInfo from "../../components/profile/UserInfo";
import Menu from "../../components/profile/Menu";

const profile = () => {
  //console.log(user);
  return (
    <View>
      {/* User Info */}
      <UserInfo />
      {/* Menu */}
      <Menu />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
