import { WeatherData } from "./WeatherData";

export type Weather = {
  selectedCityId: string;
  isLoading: boolean;
  weatherData?: WeatherData;
  weatherDataRetrievalDatetime?: Date;
  errorMessage?: string;
};
