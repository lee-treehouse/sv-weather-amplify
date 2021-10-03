import React, { useContext } from "react";
import styles from "./SimpleWeather.module.css";
import { FaUmbrella } from "react-icons/fa";
import LoadingSpinner from "components/LoadingSpinner";
import WeatherDetailsList from "components/WeatherDetailsList";
import WeatherLocationHeading from "components/WeatherLocationHeading";
import WeatherSelector from "components/WeatherSelector";
import WeatherSummary from "components/WeatherSummary";
import { WeatherContext } from "context/WeatherProvider";

const SimpleWeather = () => {
  const { weather, setSelectedCityId } = useContext(WeatherContext);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityId(event.target.value);
  };
  return (
    <div>
      <h1 className={styles.mainHeader}>
        <FaUmbrella /> Simple Weather
      </h1>

      <WeatherSelector
        selectedCityId={weather.selectedCityId}
        handleChange={handleCityChange}
      />

      {weather.isLoading && <LoadingSpinner />}

      {weather.weatherData ? (
        <>
          <WeatherLocationHeading
            locationName={weather.weatherData.name}
            dateRetrieved={weather.weatherDataRetrievalDatetime}
          />
          <WeatherSummary
            location={weather.weatherData.name}
            temp={weather.weatherData.main.temp}
            feelsLike={weather.weatherData.main.feels_like}
            description={
              weather.weatherData.weather.length > 0
                ? weather.weatherData.weather[0].description
                : undefined
            }
            icon={
              weather.weatherData.weather.length > 0
                ? weather.weatherData.weather[0].icon
                : undefined
            }
          ></WeatherSummary>
          <WeatherDetailsList weatherData={weather.weatherData} />
        </>
      ) : (
        <>
          {weather.errorMessage && (
            <div className={styles.error}>
              I am terribly sorry. Something has gone wrong. It's something to
              do with this: {weather.errorMessage}
            </div>
          )}
        </>
      )}
      <div className={styles.footer}>Hosted on AWS Amplify</div>
    </div>
  );
};

export default SimpleWeather;
