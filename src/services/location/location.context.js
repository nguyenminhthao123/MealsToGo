import React from "react";
import { createContext, useEffect, useState } from "react";
import { locationResquest, transformDataLocation } from "./location.service";
export const LoctionContext = createContext();

export const LoactionContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const onSearch = (key) => {
    setKeywords(key);
    setIsLoading(false);
  };
  useEffect(() => {
    if (!keywords.length) {
      return;
    }
    locationResquest(keywords.toLowerCase())
      .then(transformDataLocation)
      .then((results) => {
        setLocation(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keywords]);
  return (
    <LoctionContext.Provider
      value={{
        location,
        isLoading,
        search: onSearch,
        keywords,
      }}
    >
      {children}
    </LoctionContext.Provider>
  );
};
