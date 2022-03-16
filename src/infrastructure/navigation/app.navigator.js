import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { RestaurantsNavigation } from "./restaurants.navigation";
import { MapScreen } from "../../features/map/screen/map.screen";

const Tab = createBottomTabNavigator();

const CategoryScreen = () => {
  return <Text>Catelory Screen</Text>;
};
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = focused ? "restaurant" : "restaurant-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "category") {
              iconName = focused ? "cart" : "cart-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FF0033",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigation} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="category" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
