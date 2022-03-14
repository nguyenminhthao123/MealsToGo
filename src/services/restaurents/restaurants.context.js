import React, {
  useState,
  useEffect,
  uesMemo,
  createContext,
  useContext,
} from "react";
import { LoctionContext } from "../location/location.context";
import {
  restaurantsResquest,
  transformDataResult,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestataurantsContextProvider = ({ children }) => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LoctionContext);

  const retrieveRestaurants = (keyWordStrng) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsResquest(keyWordStrng)
        .then(transformDataResult)
        .then((results) => {
          setIsLoading(false);
          setRestaurantsData(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationStrng = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationStrng);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurantsData,
        isLoading,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
