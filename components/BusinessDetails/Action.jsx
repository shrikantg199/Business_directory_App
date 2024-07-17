import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const Action = ({ business }) => {
  console.log(business);
  const ActionButton = [
    {
      id: 1,
      name: "call",
      icon: require("../../assets/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/location.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.contact,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/share.png"),
      url: business?.website,
    },
  ];
  const onPressHandler = (item) => {
    Linking.openURL(item.url);
  };
  return (
    <View style={{ backgroundColor: colors.white, paddingVertical: 4 }}>
      <FlatList
        data={ActionButton}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 40,
          alignItems: "center",
       
        }}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => onPressHandler(item)}>
            <Image source={item.icon} style={{ width: 40, height: 40 }} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                marginTop: 4,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({});
