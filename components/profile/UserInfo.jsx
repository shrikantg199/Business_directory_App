import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useNavigation } from "expo-router";
import { colors } from "../../constants/Colors";

const UserInfo = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({});
  });
  return (
    <View>
      {/* <Text
        style={{
          fontWeight: 800,
          fontSize: 24,
          marginTop: 50,
          paddingLeft: 10,
        }}
      >
        Profile
      </Text> */}
      <View
        style={{
          padding: 10,
          paddingVertical: 20,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 22, fontWeight: 800 }}>{user?.fullName}</Text>
        <Text style={{ fontSize: 14 }}>
          {user?.emailAddresses[0].emailAddress}
        </Text>
      </View>
      {/* 
      <Button title="Sign Out" onPress={() => signOut()} />
      */}
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({});
