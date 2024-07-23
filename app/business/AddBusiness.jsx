import {
  ActivityIndicator,
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
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { colors } from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db, storage } from "../../configs/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const AddBusiness = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState();
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTitle: "business",
    });
    getCategoryList();
  }, []);
  const OnAddNewBusiness = async () => {
    setLoading(true);
    if (!image) {
      console.log("No image selected");
      return;
    }

    try {
      const fileName = Date.now().toString() + ".jpg";
      const resp = await fetch(image);
      const blob = await resp.blob();
      const imageRef = ref(storage, `business/${fileName}`);

      await uploadBytes(imageRef, blob)
        .then((snapshot) => {
          console.log("File uploaded successfully");
        })
        .then((resp) => {
          getDownloadURL(imageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await saveBusinessDetails(downloadUrl);
            setLoading(false);
          });
        });
      setImage(null);
      setName("");
      setAbout("");
      setAddress("");
      setContact("");
      setWebsite("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };
  const saveBusinessDetails = async (imageUrl) => {
    const businessId = Date.now().toString(); // Generate a unique ID
    try {
      await setDoc(doc(db, "Business_List", businessId), {
        name: name || "",
        about: about || "",
        contact: contact || "",
        address: address || "",
        website: website || "",
        category: selectedCategory || "",
        imageUrl: imageUrl || "",
      });
      ToastAndroid.show("New business added", ToastAndroid.LONG);
    } catch (error) {
      console.error("Error adding business:", error);
      ToastAndroid.show("Failed to add business", ToastAndroid.LONG);
    }
  };
  // imagepicker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: await ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result?.assets[0].uri);
    setImage(result?.assets[0].uri);
  };
  // category List
  const getCategoryList = async () => {
    const q = query(collection(db, "Category_List"));
    setCategory([]);
    const snapShot = await getDocs(q);
    snapShot.forEach((doc) => {
      setCategory((prev) => [
        ...prev,
        {
          label: doc.data().name,
          value: doc.data().name,
        },
      ]);
    });
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
          width: "100%",
          gap: 10,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Name"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 10,
            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(value) => setAddress(value)}
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 10,

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
            padding: 10,
            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
          value={contact}
          onChangeText={(value) => setContact(value)}
        />
        <TextInput
          placeholder="Website"
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            padding: 10,

            backgroundColor: colors.white,
            borderColor: colors.gray,
          }}
          value={website}
          onChangeText={(value) => setWebsite(value)}
        />
        <TextInput
          placeholder="About"
          multiline
          numberOfLines={5}
          value={about}
          onChangeText={(value) => setAbout(value)}
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
        <View
          style={{
            width: "80%",
            borderColor: colors.gray,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: colors.white,
          }}
        >
          <RNPickerSelect
            placeholder={{ label: "select category", color: colors.gray }}
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            items={category}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => OnAddNewBusiness()}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                backgroundColor: colors.primary,
                width: "80%",
                textAlign: "center",
                padding: 14,
                color: colors.white,
                borderRadius: 14,
              }}
            >
              Add New Business
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddBusiness;

const styles = StyleSheet.create({});
