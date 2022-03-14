import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import start from "../../../../assets/start";
import open from "../../../../assets/open";

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
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const SectionRating = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
const Open = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantsInfo = ({ restaurants = {} }) => {
  const RatingArry = Array.from(new Array(4));
  return (
    <RestaurantCard elevation={5} key={restaurants.item.name}>
      <RestaurantCardCovered
        source={{
          uri: restaurants.item.photos[0],
        }}
      />
      <Info>
        <Title>{restaurants.item.name}</Title>
        <SectionRating>
          <Rating>
            {RatingArry.map((item, index) => {
              return <SvgXml xml={start} width={20} height={20} key={index} />;
            })}
          </Rating>
          <Open>
            <SvgXml xml={open} width={20} height={20} />
          </Open>
        </SectionRating>

        <Address>{restaurants.item.vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
