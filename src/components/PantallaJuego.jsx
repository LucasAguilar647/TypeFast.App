import React from "react";
import { Word } from "./word";
import "./juego.css";

export const PantallaJuego = ({
  vidas,
  handleWordChange,
  points,
  handleSubmit,
  handleChange,
  inputValue,
}) => {
  return (
    <>
      <h1>TypeFast</h1>
      <h3>Vidas: {vidas} </h3>
      <hr />
      <div className="recuadro-juego">
        <Word onWordChange={handleWordChange} points={points} />
      </div>
      <hr />
      <h3>Points: {points} </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
