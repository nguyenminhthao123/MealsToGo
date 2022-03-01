import React from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.components";
import styled from "styled-components/native";

const SearchbarContainer = styled(View)`
  flex: 0.1;
  margin-top: ${StatusBar.currentHeight}px;
  padding-left: 10px;
  padding-right: 10px;
`;

const RestaurantContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.backgroundColor};
  flex: 0.9;
`;

const Container = styled(View)`
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <SearchbarContainer>
        <Searchbar
          placeholder="Search
        "
        />
      </SearchbarContainer>
      <RestaurantContainer>
        <RestaurantsInfo />
      </RestaurantContainer>
    </Container>
  );
};
