import React, { createContext, useEffect, useState } from "react";
import { City } from "types/City";
import { Weather } from "types/Weather";

const SELECTED_CITY_ID_KEY = "SelectedCityId";

const WEATHER_URL = "//api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export type WeatherContextType = {
  weather: Weather;
  setSelectedCityId: (selectedCityId: string) => void;
};

const defaultWeather: Weather = {
  isLoading: false,
  selectedCityId: localStorage.getItem(SELECTED_CITY_ID_KEY) ?? City.Melbourne,
};

export const WeatherContext = createContext<WeatherContextType>({
  weather: defaultWeather,
  setSelectedCityId: (selectedCityId: string): void => {
    throw new Error("Component must be nested in <WeatherContext.Provider />");
  },
});

export const WeatherProvider: React.FunctionComponent = ({ children }) => {
  const [weather, setWeather] = useState<Weather>(defaultWeather);

  const fetchData = (selectedCityId: string) => {
    const requestURL = `${WEATHER_URL}?id=${selectedCityId}&units=metric&APPID=${API_KEY}`;
    fetch(requestURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((result) => {
        setWeather({
          selectedCityId: selectedCityId,
          weatherData: result,
          weatherDataRetrievalDatetime: new Date(),
          isLoading: false,
        });
      })
      .catch((error) => {
        // set the error information into the weather object for display to the client
        // this would be an ideal place to log errors in future.
        if (error instanceof Error) {
          setWeather({
            selectedCityId: selectedCityId,
            isLoading: false,
            errorMessage: error.message,
          });
        }
      });
  };

  // set the CityId when the page is first loaded based on the default location (or from browser storage, if set);
  useEffect(() => {
    setSelectedCityId(weather.selectedCityId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSelectedCityId = (selectedCityId: string) => {
    // persist the selected city to local storage so the user can refresh browser without losing selection
    localStorage.setItem(SELECTED_CITY_ID_KEY, selectedCityId);

    setWeather({
      isLoading: true,
      selectedCityId: selectedCityId,
    });

    fetchData(selectedCityId);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setSelectedCityId,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
