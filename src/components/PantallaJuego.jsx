import React, { useRef } from "react";
import { Word } from "./Word";
import Timer from "./Timer";
import "../css/juego.css";

export const PantallaJuego = ({
  handleWordChange,
  points,
  handleSubmit,
  handleChange,
  inputValue,
  setPoints,
  setTiempo
}) => {

  const inputRef = useRef(null);
  
 
  return (
    <>
      <h1>¡Type Fast App!</h1>
      <h3 className="timer"><Timer setTiempo={setTiempo} /></h3>
      <hr />
      <div className="recuadro-juego">
        <Word onWordChange={handleWordChange} points={points} setPoints={setPoints} />
      </div>
      <hr />
      <h3 className="h3-puntos">Points: {points} </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="input-juego"
          placeholder="Type Here"
          autoComplete="off"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
