import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TripCard from "./TripCard";
import StayCard from "./StayCard";
import { Link } from "expo-router";

interface Stay {
  id: number;
  name: string;
  img: string;
  rating: number;
  price: number;
  location: string;
}

const StaysList = ({ stays }: { stays: Stay[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stays}
        renderItem={({ item }) => <StayCard stay={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.staysContainer}
      />
    </View>
  );
};

export default StaysList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  staysContainer: {
    padding: 20,
    backgroundColor: "white",
  },
});
