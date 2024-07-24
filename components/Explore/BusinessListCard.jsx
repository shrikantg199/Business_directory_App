import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(`Navigating to /businessdetails/${business.id}`);
        router.push(`/businessdetails/${business?.id}`);
      }}
      style={{
        margin: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View style={{}}>
        <Image
          source={{ uri: business?.imageUrl }}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <View style={{ padding: 6 }}>
          <Text style={{ fontWeight: 800, fontSize: 22 }}>
            {business?.name}
          </Text>
          <Text style={{ fontSize: 16 }}>{business?.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;

const styles = StyleSheet.create({});
