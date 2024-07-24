import {
  Alert,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";
const Intro = ({ business }) => {
  const router = useRouter();
  //console.log(business?.id);
  const { user } = useUser();
  const onDelete = () => {
    Alert.alert(
      "Do you want to delete",
      "Do you really want to delete this Business?",
      [
        {
          text: "cancel",
          style: "cancel",
        },
        {
          text: "delete",
          style: "delete",
          onPress: () => deleteBusiness(),
        },
      ]
    );
  };
  deleteBusiness = async () => {
    console.log("deleted");
    await deleteDoc(doc(db, "Business_List", business?.id));
    router.back();
    ToastAndroid.show("Business Deleted successfully...", ToastAndroid.LONG);
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 10,
          position: "absolute",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Ionicons
            name="arrow-back-circle"
            size={32}
            color={colors.white}
            onPress={() => router.back()}
          />
        </TouchableOpacity>
        <Ionicons name="heart" size={32} color={colors.white} />
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: "100%", height: 340 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          justifyContent: "space-between",
          marginTop: -40,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 8,

            backgroundColor: colors.white,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <Text style={{ fontWeight: 800, fontSize: 22 }}>
            {business?.name}
          </Text>
          <Text style={{ fontSize: 20 }}>{business?.address}</Text>
        </View>
        {user?.primaryEmailAddress?.emailAddress == business?.userEmail && (
          <TouchableOpacity onPress={() => onDelete()}>
            <MaterialCommunityIcons
              style={{ padding: 20 }}
              name="delete-outline"
              size={28}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Intro;
