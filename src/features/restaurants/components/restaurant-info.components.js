import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const RestaurantCard = styled(Card)`
  background-color: #fff;
  margin: 10px;
`;

const RestaurantCardCovered = styled(Card.Cover)`
  padding: 20px;
  margin: 10px;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RestaurantsInfo = ({ restaurants = {} }) => {
  const {
    name = "Some Restaurants",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurants;
  return (
    <RestaurantCard elevation={5} key={name}>
      <RestaurantCardCovered source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
