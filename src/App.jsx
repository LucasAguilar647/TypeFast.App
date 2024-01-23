import React, { useState } from "react";
import { PantallaPerdiste } from "./components/PantallaPerdiste";
import { PantallaJuego } from "./components/PantallaJuego";
import { PantallaInicio } from "./components/PantallaInicio";
import { sonidoCorrecto } from '../src/assets/CorrectoTypeFast.mp3'
import "./css/index.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [vidas, setVidas] = useState(0);
  const [showGame, setShowGame] = useState(false);

  const handleWordChange = (newWord) => {
    setCurrentWord(newWord);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toUpperCase() === currentWord) {
      sonidoCorrecto()
      setPoints(points + 1);
      setInputValue("");
      plusDeVidas();
    } else {
      plusDeVidas()
      setPoints(points - 1);
      setVidas(vidas - 1);
      setInputValue("");
    }
  };

  const handleInicioDeJuego = () => {
    setShowGame(true);
    setVidas(3);
  };


  const plusDeVidas = () =>{
    if (vidas < 3 && points === 9){
      setPoints(points - 9);
      setVidas(vidas + 1);
    }
  }

  return (
    <div className="recuadro">
      {showGame ? (
        vidas > 0 ? (
          <PantallaJuego
            vidas={vidas}
            handleWordChange={handleWordChange}
            points={points}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputValue={inputValue}
            setVidas={setVidas}
            setPoints={setPoints}
          />
        ) : (
          <PantallaPerdiste
            points={points}
            setVidas={setVidas}
            setPoints={setPoints}
          />
        )
      ) : (
        <PantallaInicio handleInicioDeJuego={handleInicioDeJuego} />
      )}
    </div>
  );
};

export default App;
