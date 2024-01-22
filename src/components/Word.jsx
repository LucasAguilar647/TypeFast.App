import React, { useEffect, useState, useRef } from "react";
import { palabrasEnEspanol } from "../assets/arrayDePalabras";
import "../css/word.css";

export const Word = ({ onWordChange, points, setVidas, vidas, setPoints }) => {
  const getRandomWord = () =>
    palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)];

  const [randomWordState, setRandomWordState] = useState(() => getRandomWord());

  const wordRef = useRef(null);
  const [positionY, setPositionY] = useState(0);
  const [startPosition, setStartPosition] = useState(null);
  //const deadLine = 2100;
  const deadLine = 550;


  useEffect(() => {
    setRandomWordState(getRandomWord());
    setStartPosition(wordRef.current.getBoundingClientRect().y);
  }, [points]);

  useEffect(() => {
    onWordChange(randomWordState);
  }, [randomWordState, onWordChange]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositionY((positionY) => positionY + 1);
      checkPosition();
    }, 1);

    return () => clearInterval(intervalId);
  }, [randomWordState]);

  const checkPosition = () => {
    const wordElement = wordRef.current;
    const rect = wordElement.getBoundingClientRect();

    if (rect.y > deadLine) {
      setPoints((points) => points - 1);
      setVidas((vidas) => vidas - 1);
      setPositionY(0);
      changeWord();
      console.log('************************************************************************');
    }
  };

  const changeWord = () => {
    setRandomWordState(getRandomWord());
    setStartPosition(wordRef.current.getBoundingClientRect().y);
  };

  const style = {
    transform: `translateY(${positionY}px)`,
  };

  return (
    <p ref={wordRef} style={style}>
      {randomWordState}
    </p>
  );
};
