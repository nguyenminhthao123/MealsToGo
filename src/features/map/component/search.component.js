import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, View } from "react-native";
import { useContext, useState, useEffect } from "react";
import { LoctionContext } from "../../../services/location/location.context";

const SearchbarContainer = styled(View)`
  flex: 0.1;
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  width: 100%;
  z-index: 9999;
`;
export const Search = () => {
  const { keywords, search } = useContext(LoctionContext);
  const [searchTerm, setSearchTerm] = useState(keywords);
  useEffect(() => {
    setSearchTerm(keywords);
  }, [keywords]);
  return (
    <SearchbarContainer>
      <Searchbar
        icon="map"
        placeholder="Search
        "
        value={searchTerm}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchTerm(text);
        }}
      />
    </SearchbarContainer>
  );
};
