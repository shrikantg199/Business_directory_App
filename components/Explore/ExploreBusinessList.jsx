import {
  FlatList,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import BusinessListCard from "./BusinessListCard";

const ExploreBusinessList = ({ business, loading, getBusinessList }) => {
  return (
    <View>
      {business.length > 0 ? (
        <ScrollView
          style={{ height: 540 }}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={business}
            onRefresh={getBusinessList}
            refreshing={loading}
            renderItem={({ item, index }) => (
              <BusinessListCard key={index} business={item} />
            )}
          />
        </ScrollView>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!loading && (
            <Text style={{ fontSize: 30, fontWeight: 800, color: "#b1bdb4" }}>
              No Business Available
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default ExploreBusinessList;

const styles = StyleSheet.create({});
