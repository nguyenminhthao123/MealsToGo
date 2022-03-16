import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../component/search.component";
const MapContainer = styled(MapView)`
  height: 100%;
`;
export const MapScreen = () => {
  return (
    <>
      <Search />
      <MapContainer />
    </>
  );
};
