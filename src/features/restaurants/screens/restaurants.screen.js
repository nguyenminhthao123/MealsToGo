import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.components";
export const RestaurantsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Searchs" />
      </View>
      <View style={styles.text}>
        <RestaurantsInfo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 0.1,
    marginTop: StatusBar.currentHeight + 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    backgroundColor: "violet",
    flex: 0.9,
  },
});
