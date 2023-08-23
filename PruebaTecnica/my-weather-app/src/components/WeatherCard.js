import React, { useEffect, useState } from "react";
import Variables from "./Variables";
import imgtemp from "../img/temp.png";
import imghum from "../img/humidity.png";
import imgwind from "../img/wind.png";
import imgcali from "../img/background.png";
import "../styles/weatherCard.css";
import Information from "./Information";
import AnimatedNums from "./AnimatedNums";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const WeatherCard = ({
  ciudad,
  temperatura,
  clima,
  humedad,
  velocidad,
  conn,
}) => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const conexionData = async () => {
      conn ? setShowCard(true) : console.log("Error en la conexion");
    };
    conexionData();
  });

  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  return (
    <div className={`weather-card ${showCard ? "show" : ""}`}>
      {conn ? (
        <div className="cont">
          <Information
            title={ciudad}
            date={formattedDate}
            temp={<AnimatedNums num={convertKelvinToCelsius(temperatura)} />}
            weather={clima}
            background={imgcali}
          ></Information>
          <div className="container-var">
            <Variables
              imageUrl={imgtemp}
              title="Temperatura"
              description={
                temperatura ? (
                  <AnimatedNums num={convertKelvinToCelsius(temperatura)} />
                ) : (
                  "No disponible"
                )
              }
            />
            <Variables
              imageUrl={imghum}
              title="Humedad"
              description={humedad + "%"}
            />
            <Variables
              imageUrl={imgwind}
              title="Viento"
              description={velocidad + "m/s"}
            />
          </div>
        </div>
      ) : (
        <h1 className="no-connection">No se han encontrado datos</h1>
      )}
    </div>
  );
};

export default WeatherCard;
