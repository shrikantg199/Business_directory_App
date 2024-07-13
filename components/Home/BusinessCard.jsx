import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BusinessCard = ({ business }) => {
  return (
    <View>
      <View style={{paddingLeft:20}}>
<Image source={{uri:business.imageUrl} } style={{width:280,height:180 ,borderRadius:24}}/>
      </View>
      
    </View>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({});
