import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
  const router = useRouter();
  console.log(business);
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => router.push(`businessdetails/${business.id}`)}
        style={{
          backgroundColor: colors.white,
          margin: 8,
          padding: 8,
          borderRadius: 15,
          display: "flex",
          flexDirection: "row",
          width: 380,
        }}
      >
        <Image
          source={{ uri: business.imageUrl }}
          style={{ width: 180, height: 130, borderRadius: 20 }}
        />
        <View style={{ padding: 10 }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 20,
              width: 200,
              fontWeight: 700,
            }}
          >
            {business.name}
          </Text>
          <Text style={{ color: colors.black, paddingTop: 10 }}>
            {business.address}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 10,
              gap: 4,
            }}
          >
            <Image
              source={require("../../assets/star.png")}
              style={{ width: 14, height: 14 }}
            />
            <Text style={{}}>4.5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BusinessListCard;

const styles = StyleSheet.create({});
