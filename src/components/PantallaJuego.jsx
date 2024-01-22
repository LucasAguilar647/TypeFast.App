import React, { useEffect, useRef } from "react";
import { Word } from "./word";
import "../css/juego.css";

export const PantallaJuego = ({
  vidas,
  setVidas,
  handleWordChange,
  points,
  handleSubmit,
  handleChange,
  inputValue,
  setPoints,
}) => {

  const inputRef = useRef(null);
  
  useEffect(() => {
    if (vidas > 0) {
      inputRef.current.focus();
    }
  }, [vidas]);

  return (
    <>
      <h1>TypeFast</h1>
      <h3>Vidas: {vidas} </h3>
      <hr />
      <div className="recuadro-juego">
        <Word onWordChange={handleWordChange} points={points} setVidas={setVidas} vidas={vidas} setPoints={setPoints} />
      </div>
      <hr />
      <h3>Points: {points} </h3>
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
