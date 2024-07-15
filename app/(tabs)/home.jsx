import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category_List from "../../components/Home/CategoryList";
import BusinessList from "../../components/Home/BusinessList";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {/* headers */}
        <Header />
        {/* slider */}
        <Slider />
        {/* category */}
        <Category_List />
        {/* business List */}
        <BusinessList />
      </View>
      <View style={{ margin: 10 }}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
