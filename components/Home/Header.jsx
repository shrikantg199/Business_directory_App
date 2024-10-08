import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
const Header = () => {
  const { user } = useUser();
  const navigation = useNavigation();
  return (
    <Animated.View
      layout={LinearTransition}
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: colors.primary,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ height: 45, width: 45, borderRadius: 99, marginTop: 10 }}
          />
        </TouchableOpacity>

        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 20, color: colors.white, fontWeight: 600 }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 15, color: colors.white, fontWeight: 500 }}>
            {user?.fullName}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          backgroundColor: colors.white,
          width: 280,
          borderRadius: 15,
          padding: 6,
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
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({});
