import React from "react";
import "../styles/variable.css";

const Variable = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <div className="subcard">
        <img src={imageUrl} alt="Card" className="logo" />
        <h2 className="titulo">{title}</h2>
      </div>

      <p className="data">{description}</p>
    </div>
  );
};

export default Variable;
