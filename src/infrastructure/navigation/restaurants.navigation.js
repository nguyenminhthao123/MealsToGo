import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantDeatail } from "../../features/restaurants/screens/restaurants-detail";
const Stack = createStackNavigator();
export const RestaurantsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
      <Stack.Screen name="Restaurants Detail" component={RestaurantDeatail} />
    </Stack.Navigator>
  );
};
