import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "../../constants/Colors";
const Intro = ({ business }) => {
  const router = useRouter();
  console.log(business);
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 10,
          position: "absolute",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Ionicons
            name="arrow-back-circle"
            size={32}
            color={colors.white}
            onPress={() => router.back()}
          />
        </TouchableOpacity>
        <Ionicons name="heart" size={32} color={colors.white} />
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: "100%", height: 340 }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical:8,
          marginTop: -40,
          backgroundColor: colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={{ fontWeight: 800, fontSize: 22 }}>{business?.name}</Text>
        <Text style={{ fontSize: 20 }}>{business?.address}</Text>
      </View>
    </View>
  );
};

export default Intro;
