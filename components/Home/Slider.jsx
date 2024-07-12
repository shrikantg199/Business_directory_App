import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../configs/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
const Slider = () => {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    getSliderList();
  }, []);
  const getSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "slider"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View style={{ padding: 14 }}>
      <Text style={{ fontWeight: 800, paddingBottom: 10, fontSize: 24 }}>
        #Special For You
      </Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 250,
              height: 150,
              marginRight: 10,
              borderRadius: 20,
              paddingLeft: 20,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
