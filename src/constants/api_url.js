const location = "Santiago,cl";
const api_key = "adb866c0cb646005a389d2f8e9268761";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;