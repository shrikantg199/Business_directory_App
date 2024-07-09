import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { colors } from "../../constants/Colors";

const TabLayout = () => {
  return (
    <Tabs style={styles.tabStyle}>
      <Tabs.Screen
        name="home"
        options={{
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
          tabBarLabel: "Explore",
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wpexplorer" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
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
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "Menu",
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="menu" size={24} color={color} />
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
