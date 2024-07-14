import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
const Header = () => {
  const { user } = useUser();
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: colors.primary,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ height: 45, width: 45, borderRadius: 99, marginTop: 10 }}
        />
        <View style={{}}>
          <Text style={{ fontSize: 20, color: colors.white, fontWeight: 600 }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 15, color: colors.white, fontWeight: 500 }}>
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          backgroundColor: colors.white,
          width: 280,
          borderRadius: 99,
          padding: 4,
          marginTop: 5,
          marginLeft: 40,
        }}
      >
        <AntDesign
          name="search1"
          size={18}
          color="black"
          style={{ paddingHorizontal: 4 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            borderColor: colors.black,
            color: colors.black,
            fontSize: 16,
            width: 220,
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
