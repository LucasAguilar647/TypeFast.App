import React from "react";
import "./perdiste.css";

export const PantallaPerdiste = ({ points, setVidas, setPoints }) => {
  const handleNuevoJuego = () => {
    setVidas(3);
    setPoints(0);
  };

  return (
    <div className="pantalla-perdiste">
      <h1>¡Te quedaste sin vidas!</h1>
      <h2>Tu puntaje final es: {points}</h2>
      <button onClick={handleNuevoJuego}>Reiniciar Juego</button>
    </div>
  );
};
