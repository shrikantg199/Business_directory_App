import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/businessList/BusinessListCard";
import { colors } from "../../constants/Colors";

const businessList = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const q = query(
      collection(db, "Business_List"),
      where("category", "==", category)
    );
    setBusiness([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusiness((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
    });
    setLoading(false);
  };

  return (
    <View>
      {business.length > 0 && loading == false ? (
        <FlatList
          data={business}
          refreshing={loading}
          onRefresh={getBusinessList}
          renderItem={({ item, index }) => (
            <BusinessListCard key={index} business={item} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          size={"large"}
          color={colors.primary}
          style={{ marginTop: 96 }}
        />
      ) : (
        <Text
          style={{
            color: "#553C3F",
            fontWeight: 900,
            fontSize: 20,
            marginTop: "50%",
            textAlign: "center",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
};

export default businessList;
