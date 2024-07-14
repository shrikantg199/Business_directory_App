import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const BusinessListCard = ({ business }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: colors.white,
          margin: 8,
          padding: 8,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: colors.black }}>{business.name}</Text>
        <Image
          source={{ uri: business.imageUrl }}
          style={{ width: 200, height: 130, borderRadius: 20 }}
        />
      </View>
    </ScrollView>
  );
};

export default BusinessListCard;

const styles = StyleSheet.create({});
