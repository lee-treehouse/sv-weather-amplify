import React from "react";
import "./App.css";
import { WeatherProvider } from "./context/WeatherProvider";
import SimpleWeather from "./views/SimpleWeather";

function App() {
  return (
    <WeatherProvider>
      <SimpleWeather />
    </WeatherProvider>
  );
}

export default App;
