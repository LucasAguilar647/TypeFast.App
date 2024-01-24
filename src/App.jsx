import React, { useState } from "react";
import { PantallaPerdiste } from "./components/PantallaPerdiste";
import { PantallaJuego } from "./components/PantallaJuego";
import { PantallaInicio } from "./components/PantallaInicio";
import useSound from 'use-sound';
import correctSound from './assets/CorrectTypeFast.mp3';
import incorrectSound from './assets/IncorrectTypeFast.mp3';
import Timer from './components/Timer';  
import "./css/index.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [showGame, setShowGame] = useState(false);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);
  const [tiempo, setTiempo] = useState(true); 

  const handleWordChange = (newWord) => {
    setCurrentWord(newWord);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toUpperCase() === currentWord) {
      playCorrect(); 
      setPoints(points + 1);
      setInputValue("");
      
    } else {
      playIncorrect()
     
      setPoints(points - 1);
      
      setInputValue("");
    }
  };

  const handleInicioDeJuego = () => {
    setShowGame(true);
    setTiempo(true); 
  };


  return (
    <div className="recuadro">
      {showGame ? (
        tiempo ? (
          <>
            <PantallaJuego
              handleWordChange={handleWordChange}
              points={points}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              inputValue={inputValue}
              tiempo={tiempo}
              setPoints={setPoints}
              setTiempo={setTiempo}
            />
          </>
        ) : (
          <PantallaPerdiste
            points={points}
            setTiempo={setTiempo}
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
