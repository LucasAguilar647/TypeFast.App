import React, { useEffect, useState, useRef } from "react";
import { palabrasEnEspanol } from "../assets/arrayDePalabras";
import "../css/word.css";

export const Word = ({ onWordChange, points, setVidas, vidas, setPoints }) => {
  const getRandomWord = () =>
    palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)];

  const [randomWordState, setRandomWordState] = useState(() => getRandomWord());
  const [positionY, setPositionY] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prevPoints, setPrevPoints] = useState(points);
  const wordRef = useRef(null);

  const deadLine = 480;

  useEffect(() => {
    setRandomWordState(getRandomWord());
    setPositionY(0);
    setElapsedTime(0);
    setIsVisible(true);
  }, [points]);

  useEffect(() => {
    onWordChange(randomWordState);
  }, [randomWordState, onWordChange]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositionY((position) => position + 5);
      setElapsedTime((time) => time + 1);
      checkPosition();
     // checkPointsIncrease();
    }, 1);

    return () => clearInterval(intervalId);
  }, [randomWordState]);

  const checkPosition = () => {
    const wordElement = wordRef.current;
    const rect = wordElement.getBoundingClientRect();

    if (rect.y > deadLine || points === prevPoints + 1) {
      handleWordExpiration();
    }
  };

  const handleWordExpiration = () => {
    setPositionY(0);
    setElapsedTime(0);
    setIsVisible(false);
    setPrevPoints(points)
  };

  /*const checkPointsIncrease = () => {
    if (points === prevPoints + 1) {
      // Oculta el componente actual
      setIsVisible(false);  
      setTimeout(() => {
        setRandomWordState(getRandomWord());
        setPositionY(0);
        setElapsedTime(0);
        setIsVisible(true);
      }, 500);
    }
  
    setPrevPoints(points);
  };*/
  
  

  const style = {
    transform: `translateY(${positionY}px)`,
  };

  return isVisible && vidas > 0 ? (
    <p ref={wordRef} style={style}>
      {randomWordState}
    </p>
  ) : null;
};
