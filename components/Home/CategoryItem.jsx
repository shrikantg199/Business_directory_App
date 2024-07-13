import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CategoryItem = ({ category, OnCategoryPress }) => {
  return (
    <TouchableOpacity onPress={() => OnCategoryPress(category)}>
      <Image
        source={{ uri: category.icon }}
        style={{
          width: 45,
          height: 45,
          marginRight: 50,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      />
      <Text style={{ alignItems: "center", marginRight: 10, fontWeight: 700 }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
