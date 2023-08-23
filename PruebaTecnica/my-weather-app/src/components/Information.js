import React from "react";
import "../styles/information.css";

const Information = ({ title, date, temp, weather, background }) => {
  return (
    <div
      className="information"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* <img src={background} alt="Card" /> */}
      <div className="title-cont">
        <h2 className="textinfo title">
          {title === "Cali"
            ? `SANTIAGO DE ${title.toUpperCase()}`
            : title.toUpperCase()}
        </h2>
        <h2 className="textinfo date">{date}</h2>
        <h2 className="textinfo temp">{temp}</h2>
      </div>
      <div className="clima-cont">
        <h2 className="climainfo">
          <b>Clima / </b>
          {weather}
        </h2>
      </div>
    </div>
  );
};

export default Information;
