import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";

const Category_List = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const q = query(collection(db, "Category_List"));
    setCategories([]);
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      // console.log(doc.data());
      setCategories((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 18 }}>Category</Text>
        <Text style={{ fontWeight: 400, fontSize: 16 }}>View All</Text>
      </View>

      <View>
        <FlatList
          style={{ padding: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item, index }) => (
            <CategoryItem
              category={item}
              key={index}
              OnCategoryPress={(value) => console.log(value.name)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Category_List;

const styles = StyleSheet.create({});
