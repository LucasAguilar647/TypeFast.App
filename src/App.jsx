import React, { useState } from "react";
import "./index.css";
import { Word } from "./components/word";
import { PantallaPerdiste } from "./components/PantallaPerdiste";
import { PantallaJuego } from "./components/PantallaJuego";

const App = () => {
  const [points, setPoints] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [vidas, setVidas] = useState(3);

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
        <PantallaJuego
          vidas={vidas}
          handleWordChange={handleWordChange}
          points={points}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputValue={inputValue}
        />
      ) : (
        <PantallaPerdiste points={points}  setVidas={setVidas} setPoints={setPoints} />
      )}
    </div>
  );
};

export default App;
