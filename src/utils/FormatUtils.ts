import { format } from "date-fns";
import { convertEpochDateToDate } from "./ConversionUtils";

export const formatEpochDateAsTimestamp = (date: number) => {
  return format(convertEpochDateToDate(date), "p");
};

export const formatDateAsLongDate = (date: Date) => {
  return format(date, "PPPP");
};
