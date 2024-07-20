import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Category_List from "../../components/Home/CategoryList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

const explore = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBusinessList = async (category) => {
    const q = query(
      collection(db, "Business_List"),
      where("category", "==", category)
    );
    setBusinesses([]);
    setLoading(true);
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      setBusinesses((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
    setLoading(false);
  };
  return (
    <View >
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontWeight: 800,
            paddingTop: 40,
            fontSize: 22,
            paddingLeft: 20,
            marginVertical: 8,
          }}
        >
          Explore More
        </Text>
        {/* search bar */}
        <View
          style={{
            width: 350,
            backgroundColor: colors.white,
            padding: 8,
            borderRadius: 10,
            borderColor: colors.black,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: 4,
          }}
        >
          <AntDesign
            name="search1"
            size={18}
            color="black"
            style={{ paddingHorizontal: 4 }}
          />
          <TextInput placeholder="Search..." />
        </View>
        {/* category */}
      </View>

      <Category_List
        explore={true}
        onCategorySelect={(category) => {
          getBusinessList(category);
          //console.log(category);
        }}
      />
      {/* Business List */}
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 40 }}
          size={"large"}
          color={colors.primary}
        />
      ) : (
        <ExploreBusinessList
          getBusinessList={getBusinessList}
          loading={loading}
          business={businesses}
        />
      )}
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({});
