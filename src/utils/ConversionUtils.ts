export const convertMetersPerSecondToKilometersPerHour = (value: number) => {
  // gust and windspeed are provided as meters per second, km per hour are more useful to Australian users
  const metersPerHour = value * 60 * 60;
  const kilometersPerHour = metersPerHour / 1000;
  return kilometersPerHour;
};

export const convertEpochDateToDate = (value: number) => {
  return new Date(value * 1000);
};
