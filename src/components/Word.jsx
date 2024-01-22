import React, { useEffect, useState, useRef } from "react";
import { palabrasEnEspanol } from "../assets/arrayDePalabras";
import "./word.css";

export const Word = ({ onWordChange, points, setVidas, vidas, setPoints }) => {
  const [randomWordState, setRandomWordState] = useState(
    palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)]
  );

  const [positionY, setPositionY] = useState(0);
  const wordRef = useRef(null);
  const deadLine = 450;

  useEffect(() => {
    setRandomWordState(palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)]);
    setPositionY(0);
  }, [points]);

  useEffect(() => {
    onWordChange(randomWordState);
  }, [randomWordState, onWordChange]);


  //TODO: verificar para que se ejecute cuando pasa la deadline y reste solo una vida
  const checkPosition = () => {
    const wordElement = wordRef.current;
    const rect = wordElement.getBoundingClientRect();
    console.log("Posición en pantalla:", rect);

    if (rect.y > deadLine) {
      setRandomWordState(palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)]);
      setVidas((vidas) => vidas - 1);
      setPoints(points - 1);
      setPositionY(0);
      console.log('Paso la deadLine');
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositionY((positionY) => positionY + 1);
      checkPosition(); 
    }, 1);

    return () => clearInterval(intervalId);
  }, [randomWordState, checkPosition]);

  const style = {
    transform: `translateY(${positionY}px)`,
  };

  return <p ref={wordRef} style={style}>{randomWordState}</p>;
};
