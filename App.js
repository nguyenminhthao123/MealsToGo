import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation/app.navigator";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { RestataurantsContextProvider } from "./src/services/restaurents/restaurants.context";
import { LoactionContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [fontsLato] = useLato({
    Lato_400Regular,
  });

  const [fontsOswald] = useOswald({
    Oswald_400Regular,
  });

  if (!fontsLato || !fontsOswald) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoactionContextProvider>
          <RestataurantsContextProvider>
            <Navigation />
          </RestataurantsContextProvider>
        </LoactionContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
