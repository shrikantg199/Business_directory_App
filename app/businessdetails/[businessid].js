import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { ActivityIndicator } from "react-native";
import { colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetails/Intro";

const BusinessDetails = () => {
  const { businessid } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [business, setBusiness] = useState();
  useEffect(() => {
    if (businessid) {
      getBusinessDetails();
    }
  }, [businessid]);
  const getBusinessDetails = async () => {
    const docRef = doc(db, "Business_List", businessid);
    setLoading(true);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //console.log(docSnap.data());
      setBusiness(docSnap.data());
      setLoading(false);
    }
  };
  return (
    <View style={{ marginTop: 32 }}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={colors.primary}
          style={{ marginTop: 96 }}
        />
      ) : (
        <View>
          {/* intro section */}
          <Intro business={business} />
          {/* action button */}
          {/* about section */}
        </View>
      )}
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({});
