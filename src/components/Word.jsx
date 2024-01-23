import React, { useEffect, useState } from "react";
import { palabrasEnEspanol } from "../assets/arrayDePalabras";
import '../css/word.css'

export const Word = ({ onWordChange, points }) => {
  const randomWord =
    palabrasEnEspanol[Math.floor(Math.random() * palabrasEnEspanol.length)];

  const [randomWordState, setSandomWordState] = useState(randomWord);

  useEffect(() => {
    setSandomWordState(randomWord);
  }, [points]);

  useEffect(() => {
    onWordChange(randomWordState);
  }, [randomWordState, onWordChange]);

  return <p> {randomWordState} </p>;
};
