import "./App.css";
import WeatherCard from "./components/WeatherCard";
import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "./api";

function App() {
  const [weather, setWeather] = useState(null);
  const [connection, setConnection] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeather(data);
        setConnection(true);
      } catch (error) {
        setConnection(false);
        console.error("Error en la data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="app">
        {connection && weather ? (
          <WeatherCard
            ciudad={weather.name}
            temperatura={weather.main.temp}
            clima={weather.weather[0].main}
            humedad={weather.main.humidity}
            velocidad={weather.wind.speed}
            conn={connection}
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
