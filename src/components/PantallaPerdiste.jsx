import React from "react";
import "../css/perdiste.css";

export const PantallaPerdiste = ({ points,  setPoints , setTiempo}) => {
  const handleNuevoJuego = () => {
    setTiempo(true)
    setPoints(0);
  };

  return (
    <div className="pantalla-perdiste">
      <h1>¡El tiempo se agotó!</h1>
      <h2>Tu puntaje final es: {points}</h2>
      <button onClick={handleNuevoJuego}>Reiniciar Juego</button>
    </div>
  );
};
