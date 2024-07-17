import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { colors } from "../../constants/Colors";

const Reviews = () => {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState();

  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontWeight: 800, fontSize: 22 }}>Reviews</Text>

      <Rating
        showRating={false}
        onFinishRating={(rating) => setRating(rating)}
        imageSize={28}
        style={{ paddingVertical: 20 }}
      />
      <TextInput
        placeholder="Write your comment"
        numberOfLines={4}
        value={input}
        onChangeText={(value) => setInput(value)}
        style={{
          borderRadius: 15,
          textAlignVertical: "top",
          borderColor: colors.black,
          borderWidth: 1,
          padding: 10,
        }}
      />
      <TouchableOpacity
        style={{ paddingVertical: 4 }}
        onPress={() => console.log(input, rating)}
      >
        <Text
          style={{
            backgroundColor: colors.primary,
            textAlign: "center",
            paddingVertical: 9,
            borderRadius: 20,
            color: colors.white,
            fontSize: 16,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
