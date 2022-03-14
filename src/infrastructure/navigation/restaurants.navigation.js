import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
const Stack = createStackNavigator();
export const RestaurantsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
    </Stack.Navigator>
  );
};
