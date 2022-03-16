import React, { useState } from "react";
import { RestaurantsInfo } from "../components/restaurant-info.components";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
export const RestaurantDeatail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);
  const { restaurants } = route.params;
  return (
    <>
      <RestaurantsInfo restaurants={restaurants} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Bánh mì" />
          <List.Item title="Xôi gà" />
          <List.Item title="Bánh ướt" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Bánh mì" />
          <List.Item title="Xôi gà" />
          <List.Item title="Bánh ướt" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Bánh mì" />
          <List.Item title="Xôi gà" />
          <List.Item title="Bánh ướt" />
        </List.Accordion>

        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        >
          <List.Item title="Bánh mì" />
          <List.Item title="Xôi gà" />
          <List.Item title="Bánh ướt" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
