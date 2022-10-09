import { format } from "date-fns";

export const formatDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export const formatTime = (date: Date) => {
  return format(date, "HH:mm");
};
