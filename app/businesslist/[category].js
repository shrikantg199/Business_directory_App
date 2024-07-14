import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/businessList/BusinessListCard";

const businessList = () => {
  const [business, setBusiness] = useState([]);
  const navigate = useNavigation();
  const { category } = useLocalSearchParams();
  //console.log(category);

  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, [category]);
  const getBusinessList = async () => {
    const q = query(
      collection(db, "Business_List"),
      where("category", "==", category)
    );
    setBusiness([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusiness((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
     
      <FlatList
        data={business}
        renderItem={({ item, index }) => (
          <BusinessListCard key={index} business={item} />
        )}
      />
    </View>
  );
};

export default businessList;
