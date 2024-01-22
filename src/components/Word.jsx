import React, { useEffect, useState, useRef } from "react";
import { palabrasEnEspanol } from "../assets/arrayDePalabras";
import "./word.css";

export const Word = ({ onWordChange, points }) => {
  const randomWord =
    palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)];

  const [randomWordState, setRandomWordState] = useState(randomWord);
  const wordRef = useRef(null);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    setRandomWordState(randomWord);
  }, [points]);

  useEffect(() => {
    onWordChange(randomWordState);

    const wordElement = wordRef.current;
    if (wordElement) {
      const rect = wordElement.getBoundingClientRect();
      console.log("Posición en pantalla:", rect);
    }
  }, [randomWordState, onWordChange]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositionY((prevPositionY) => prevPositionY + 1);
    }, 1);

    return () => clearInterval(intervalId);
  }, []);

  const style = {
    transform: `translateY(${positionY}px)`,
  };

  return <p ref={wordRef} style={style}>{randomWordState}</p>;
};
