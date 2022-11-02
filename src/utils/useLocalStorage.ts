export const saveOnLocalStorage = (key: string, value: {}) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    const JsonValue = JSON.parse(value);
    return JsonValue;
  }
};

export const clearLocalStorage = (key: string) => {
  localStorage.setItem(key, "");
};
