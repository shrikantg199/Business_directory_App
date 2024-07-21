import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { colors } from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
const AddBusiness = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTitle: "business",
    });
  });
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result?.assets[0].uri);
    setImage(result?.assets[0].uri);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 800, fontSize: 28 }}>AddBusiness</Text>
        <Text style={{}}>Fill the details</Text>
      </View>
      <TouchableOpacity
        onPress={pickImage}
        style={{
          padding: 20,
          backgroundColor: colors.black,
          width: 120,
          height: 100,
          marginLeft: 20,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.white,
        }}
      >
        {!image ? (
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: 80, height: 80 }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{ width: 120, height: 100, borderRadius: 20 }}
          />
        )}
      </TouchableOpacity>
      <View
        style={{
          marginVertical: 30,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Name"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 14,

            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
        />
        <TextInput
          placeholder="Address"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 14,

            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
        />
        <TextInput
          placeholder="Contact"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 14,

            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
        />
        <TextInput
          placeholder="About"
          multiline
          numberOfLines={5}
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 14,
            textAlignVertical: "top",
            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
        />
        <Text
          style={{
            backgroundColor: colors.primary,
            width: "80%",
            textAlign: "center",
            padding: 15,
            color: colors.white,
            borderRadius: 14,
          }}
        >
          Submit
        </Text>
      </View>
    </ScrollView>
  );
};

export default AddBusiness;

const styles = StyleSheet.create({});
