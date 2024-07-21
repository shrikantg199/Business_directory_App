import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, useNavigation } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "../../constants/Colors";

const TabLayout = () => {
  const navigation = useNavigation();
  return (
    <Tabs style={{ padding: 32 }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: colors.primary,

          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: true,
          headerTitle: "Explore",
          headerStyle: { backgroundColor: colors.primary },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome
                name="arrow-left"
                size={24}
                color="#fff"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            paddingVertical: 8,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wpexplorer" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitle: "Profile",
          headerStyle: { backgroundColor: colors.primary },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome
                name="arrow-left"
                size={24}
                color="#fff"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabStyle: {},
});
