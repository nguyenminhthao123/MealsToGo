import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../component/search.component";
import { useContext, useState } from "react";
import { LoctionContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurents/restaurants.context";
import { MapCallout } from "../component/map.callout";
const MapContainer = styled(MapView)`
  height: 100%;
`;
export const MapScreen = () => {
  const { location, viewport } = useContext(LoctionContext);
  const { restaurantsData } = useContext(RestaurantsContext);
  const latitude = location.lat;
  const longitude = location.lng;
  const latitudeDelta = viewport.northeast.lat - viewport.southwest.lat;
  const longitudeDelta = viewport.northeast.lng - viewport.southwest.lng;
  return (
    <>
      <Search />
      <MapContainer
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
      >
        {restaurantsData.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapContainer>
    </>
  );
};
