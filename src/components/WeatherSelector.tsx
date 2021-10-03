import React from "react";
import styles from "./WeatherSelector.module.css";
import { City } from "types/City";

const WeatherSelector = ({
  selectedCityId,
  handleChange,
}: {
  selectedCityId: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor="citySelect" className={styles.label}>
        Select a Location
      </label>
      <div>
        <select id="citySelect" value={selectedCityId} onChange={handleChange}>
          {Object.entries(City).map(([label, cityId]) => {
            return (
              <option key={cityId} value={cityId}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default WeatherSelector;
