import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { useNavigation, useRouter } from "expo-router";
import { colors } from "../../constants/Colors";

const Category_List = ({ explore = false, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const navigation = useNavigation();
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
  const onCategoryPress = (category) => {
    if (!explore) {
      router.push(`/businesslist/${category}`);
    } else {
      onCategorySelect(category);
    }
  };
  return (
    <View>
      {!explore && (
        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 18 }}>Category</Text>
          <TouchableOpacity onPress={() => navigation.navigate("explore")}>
            <Text style={{ fontWeight: 400, fontSize: 16 }}>View All</Text>
          </TouchableOpacity>
        </View>
      )}

      <View>
        <FlatList
          style={{ padding: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item, index }) => (
            <CategoryItem
              category={item}
              key={item.id}
              OnCategoryPress={(category) => {
                //console.log(category);
                onCategoryPress(category);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Category_List;

const styles = StyleSheet.create({});
