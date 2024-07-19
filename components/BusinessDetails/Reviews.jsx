import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Rating } from "react-native-ratings";
import { colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

const Reviews = ({ business }) => {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(business?.reviews || []);
  const { user } = useUser();
 
  useEffect(() => {
    setReviews(business?.reviews || []);
  }, [business]);

  const onSubmit = async () => {
    const docRef = doc(db, "Business_List", business?.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: input,
        username: user?.fullName,
        userImage: user?.imageUrl,
      }),
    });

  
    setReviews([
      ...reviews,
      {
        rating: rating,
        comment: input,
        username: user?.fullName,
        userImage: user?.imageUrl,
      }
    ]);


    setInput("");
    setRating(0);
    ToastAndroid.show("Comment added successfully!", ToastAndroid.BOTTOM);
  };

  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontWeight: "800", fontSize: 22 }}>Reviews</Text>

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
        onPress={onSubmit}
        disabled={!input}
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

      {/* Display the comments */}
      <View>
        {reviews.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: colors.white,
              shadowColor: "#000",
              elevation: 5,
              width: "100%",
              height: 100,
              marginVertical: 8,
              borderRadius: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 30,
            }}
          >
            <Image
              source={{ uri: item.userImage }}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <View style={{ margin: 20 }}>
              <Text style={{ fontWeight: "800", fontSize: 17 }}>
                {item.username}
              </Text>
              <Text style={{ fontSize: 14 }}>{item.comment}</Text>
              <Rating
                imageSize={20}
                startingValue={item.rating}
                readonly
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
