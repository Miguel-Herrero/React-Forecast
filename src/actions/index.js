import axios from 'axios';

const API_KEY = '20966562cd1e9b1ec0855ad491e2d3df';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url); // Returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
