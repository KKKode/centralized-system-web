export const BASE_URL = "http://localhost:8080/api/v1";
// "https://centralized-tracking-system-backend.onrender.com/api/v1";

//? SET To LocalStorage
export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: string) => {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) ?? null
    : null;
};

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
