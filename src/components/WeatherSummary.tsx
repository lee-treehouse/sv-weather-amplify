import React from "react";
import styles from "./WeatherSummary.module.css";

const WeatherSummary = ({
  location,
  temp,
  feelsLike,
  description,
  icon,
}: {
  location: string;
  temp: number;
  feelsLike: number;
  description?: string;
  icon?: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.temperatureContainer}>
          <div className={styles.current}>{temp.toFixed(1)}&deg;</div>
          <div className={styles.feelsLike}>
            feels like {feelsLike.toFixed(1)}&deg;
          </div>
        </div>
        <div className={styles.icon}>
          <img src={`//openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default WeatherSummary;
