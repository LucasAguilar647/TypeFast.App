import React, { useState } from "react";
import "./index.css";
import { Word } from "./components/word";
import { PantallaPerdiste } from "./components/PantallaPerdiste";

const App = () => {
  const [points, setPoints] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [vidas, setVidas] = useState(1);

  const handleWordChange = (newWord) => {
    setCurrentWord(newWord);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === currentWord) {
      setPoints(points + 1);
      setInputValue("");
    } else {
      setPoints(points - 1);
      setVidas(vidas - 1);
      setInputValue("");
    }
  };

  return (
    <div className="recuadro">
      {vidas > 0 ? (
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
      ) : (
       <PantallaPerdiste points={points}/>
      )}
    </div>
  );
};

export default App;
