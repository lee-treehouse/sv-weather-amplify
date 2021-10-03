import React from "react";
import { WeatherData } from "types/WeatherData";
import WeatherDetailItem from "./WeatherDetailItem";
import styles from "./WeatherDetailsList.module.css";

import {
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiRain,
  WiSunrise,
  WiSunset,
  WiSnow,
} from "react-icons/wi";
import { BiUpArrowCircle } from "react-icons/bi";
import { formatEpochDateAsTimestamp } from "utils/FormatUtils";
import { convertMetersPerSecondToKilometersPerHour } from "utils/ConversionUtils";

const WeatherDetailsList = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <div className={styles.list}>
      <div className={styles.section}>
        <WeatherDetailItem
          title="Pressure"
          value={weatherData.main.pressure}
          suffix="hPa"
          icon={WiBarometer}
        />
        <WeatherDetailItem
          title="Humidity"
          value={`${weatherData.main.humidity}%`}
          icon={WiHumidity}
        />
      </div>
      <div className={styles.section}>
        <WeatherDetailItem
          title="Sunrise"
          value={formatEpochDateAsTimestamp(weatherData.sys.sunrise)}
          icon={WiSunrise}
        />
        <WeatherDetailItem
          title="Sunset"
          value={formatEpochDateAsTimestamp(weatherData.sys.sunset)}
          icon={WiSunset}
        />
      </div>
      {weatherData.wind && (
        <div className={styles.section}>
          <WeatherDetailItem
            title="Wind Speed"
            value={Math.round(
              convertMetersPerSecondToKilometersPerHour(weatherData.wind.speed)
            )}
            suffix="km/h"
            icon={BiUpArrowCircle}
            // The arrow icon is rotated to indicate the wind direction (inspired by BOM app)
            iconRotation={weatherData.wind.deg}
          />
          {weatherData.wind.gust && (
            <WeatherDetailItem
              title="Wind Gust"
              value={Math.round(
                convertMetersPerSecondToKilometersPerHour(weatherData.wind.gust)
              )}
              suffix="km/h"
              icon={WiStrongWind}
            />
          )}
        </div>
      )}
      {weatherData.rain && (
        <div className={styles.section}>
          {weatherData.rain["1h"] && (
            <WeatherDetailItem
              title="Rain (Last 1 hr)"
              value={weatherData.rain["1h"]}
              suffix="mm"
              icon={WiRain}
            />
          )}
          {weatherData.rain["3h"] && (
            <WeatherDetailItem
              title="Rain (Last 3 hrs)"
              value={weatherData.rain["3h"]}
              suffix="mm"
              icon={WiRain}
            />
          )}
        </div>
      )}
      {weatherData.snow && (
        <div className={styles.section}>
          {weatherData.snow["1h"] && (
            <WeatherDetailItem
              title="Snow (Last 1 hr)"
              value={weatherData.snow["1h"]}
              suffix="mm"
              icon={WiSnow}
            />
          )}
          {weatherData.snow["3h"] && (
            <WeatherDetailItem
              title="Snow (Last 3 hrs)"
              value={weatherData.snow["3h"]}
              suffix="mm"
              icon={WiSnow}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherDetailsList;
