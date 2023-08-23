import axios from "axios";

const API_URL = "http://localhost:3000/weather?key=llaveSimulada";

export const fetchWeatherData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
