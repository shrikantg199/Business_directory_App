import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";

const profile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  //console.log(user);
  return (
    <View>
      <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      <Text>{user?.fullName}</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
      {user?.imageUrl && <Image source={{ uri: user.imageUrl }} />}
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
