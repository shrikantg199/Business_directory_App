import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessCard from "./BusinessCard";
import { useNavigation } from "expo-router";

const BusinessList = () => {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    getBusinessList();
  }, []);
  const navigation = useNavigation();
  const getBusinessList = async () => {
    const q = query(collection(db, "Business_List"));
    setBusiness([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      setBusiness((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
    });
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Popular Business</Text>
        <TouchableOpacity onPress={() => navigation.navigate("explore")}>
          <Text style={{ fontWeight: 400, fontSize: 16 }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={business}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <BusinessCard key={index} business={item} />
          )}
        />
      </View>
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({});
