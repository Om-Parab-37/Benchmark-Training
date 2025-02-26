import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken: (token: string) => number = (token) => {
  return Number(jwtDecode(token).sub);
};

export const formatDate = (dateString: Date): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getISODateMidnight = (date = new Date()) => {
  const midnight = new Date(date);
  midnight.setUTCHours(0, 0, 0, 0);
  return midnight.toISOString();
};
