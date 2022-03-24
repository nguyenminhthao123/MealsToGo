import React from "react";
import { View, Text, Image } from "react-native";
import { WebView } from "react-native-webview";

export const CompacRestaurenterInfo = ({ restaurant }) => {
  console.log(restaurant.photos[0]);
  return (
    <View>
      <WebView
        source={{ uri: restaurant.photos[0] }}
        style={{ height: 120, width: 100 }}
      />
      <Text>{restaurant.name}</Text>
    </View>
  );
};
