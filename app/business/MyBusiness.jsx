import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";
import BusinessListCard from "../../components/Explore/BusinessListCard";
import { useNavigation } from "expo-router";
const MyBusiness = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const navigate = useNavigation();
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTitle: "My Business",
    });
    if (user) {
      getUserBusiness();
    }
  }, [user]);
  const getUserBusiness = async () => {
    setLoading(true);
    setBusinessList([]);
    const q = query(
      collection(db, "Business_List"),
      where("userEmail", "==", user?.primaryEmailAddress?.emailAddress)
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      //console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
    });
    setLoading(false);
  };
  return (
    <View>
      <FlatList
        data={businessList}
        onRefresh={getUserBusiness}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <BusinessListCard key={index} business={item} />
        )}
      />
    </View>
  );
};

export default MyBusiness;

const styles = StyleSheet.create({});
