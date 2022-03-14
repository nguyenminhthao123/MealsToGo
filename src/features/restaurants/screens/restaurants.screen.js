import React from "react";
import { View, FlatList } from "react-native";
import { RestaurantsInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurents/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const RestaurantContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.backgroundColor};
  flex: 0.9;
`;

const Container = styled(View)`
  flex: 1;
`;

const AppLoading = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
`;

export const RestaurantsScreen = () => {
  const res = useContext(RestaurantsContext);
  if (res.isLoading) {
    return <AppLoading animating={true} color={Colors.lightBlue300} />;
  }
  return (
    <Container>
      <Search />
      <RestaurantContainer>
        <FlatList
          data={res.restaurantsData}
          renderItem={(item) => {
            return <RestaurantsInfo restaurants={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantContainer>
    </Container>
  );
};
