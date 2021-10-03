import React from "react";
import { formatDateAsLongDate } from "utils/FormatUtils";
import styles from "./WeatherLocationHeading.module.css";

const WeatherLocationHeading = ({
  locationName,
  dateRetrieved,
}: {
  locationName: string;
  dateRetrieved?: Date;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{locationName}</div>
      {dateRetrieved && <div>{formatDateAsLongDate(dateRetrieved)}</div>}
    </div>
  );
};

export default WeatherLocationHeading;
