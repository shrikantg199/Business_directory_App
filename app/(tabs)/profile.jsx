import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo"; // Adjust according to your auth provider

const Profile = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth(); // Adjust according to your auth provider

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Log out error", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>this is my profile</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
