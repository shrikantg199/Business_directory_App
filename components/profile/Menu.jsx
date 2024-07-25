import {
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Menu = () => {
  const { signOut } = useAuth();
  const MenuList = [
    {
      id: "1",
      name: "Add Business",
      icons: require("../../assets/addBusiness.png"),
      path: "/business/AddBusiness",
    },
    {
      id: "2",
      name: "Share APP",
      icons: require("../../assets/share.png"),
      path: "share",
    },
    {
      id: "3",
      name: "My Business",
      icons: require("../../assets/Mybusiness.png"),
      path: "/business/MyBusiness",
    },
    {
      id: "4",
      name: "Log Out",
      icons: require("../../assets/Logout.png"),
      path: "Logout",
    },
  ];
  //console.log(MenuList);
  const router = useRouter();

  const navigateItem = async (item) => {
    if (item.path === "Logout") {
      try {
        await signOut();
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    } else if (item.path === "share") {
      Share.share({
        message: "This is my business",
      });
    } else {
      router.push(item.path);
    }
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={MenuList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.menu}
            key={item.id}
            onPress={() => navigateItem(item)}
          >
            <Image source={item.icons} style={{ width: 40, height: 40 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    borderColor: colors.black,
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    padding: 30,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: colors.gray,
    borderWidth: 1,
    flex: 1,
  },
});
