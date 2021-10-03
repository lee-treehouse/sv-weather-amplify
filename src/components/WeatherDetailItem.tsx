import React from "react";
import { IconType } from "react-icons";
import styles from "./WeatherDetailItem.module.css";

const WeatherDetailItem = ({
  title,
  value,
  suffix,
  icon: Icon,
  iconRotation,
}: {
  title: string;
  value: string | number;
  suffix?: string;
  icon?: IconType;
  iconRotation?: number;
  formatString?: string;
}) => {
  return (
    <div className={styles.item}>
      {Icon && (
        <div className={styles.icon}>
          <Icon
            style={
              iconRotation ? { transform: `rotate(${iconRotation}deg)` } : {}
            }
          />
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <div>
        {value} {suffix && suffix}
      </div>
    </div>
  );
};

export default WeatherDetailItem;
