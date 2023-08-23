import React, { useEffect, useState } from "react";

const AnimatedTemperature = ({ num }) => {
  const [currentTemp, setCurrentTemp] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let startTimestamp;

    const animateTemperature = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const increment = Math.floor((progress / 1000) * (num - currentTemp));
      const newTemp = currentTemp + increment;

      if (newTemp < num) {
        setCurrentTemp(newTemp);
        animationFrameId = requestAnimationFrame(animateTemperature);
      } else {
        setCurrentTemp(num);
      }
    };

    animationFrameId = requestAnimationFrame(animateTemperature);

    return () => cancelAnimationFrame(animationFrameId);
  }, [num, currentTemp]);

  return <span>{currentTemp}°</span>;
};

export default AnimatedTemperature;
