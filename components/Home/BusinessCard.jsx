import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const BusinessCard = ({ business }) => {
  return (
    <View style={{ marginLeft: 8 }}>
      <View
        style={{
          padding: 6,

          paddingBottom: 10,
          backgroundColor: colors.white,
          borderRadius: 20,
          marginHorizontal: 2,
        }}
      >
        <Image
          source={{ uri: business.imageUrl }}
          style={{
            width: 200,
            height: 150,
            padding: 10,
            borderRadius: 24,
          }}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 2 }}>
            {business.name}
          </Text>
          <Text style={{ fontSize: 14,  }}>
            {business.address}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/star.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>4.5</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.primary,
              padding:6,
              borderRadius: 10,
              alignItems:"center"
            }}
          >
            <Text style={{ color: colors.white}}>{business.category}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({});
