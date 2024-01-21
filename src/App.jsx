import React, { useState } from "react";
import "./index.css";
import { Word } from "./components/word";

const App = () => {

  const [points, setPoints] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("");

  const handleWordChange = (newWord) => {
    setCurrentWord(newWord);
  };

 
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === currentWord ){
      setPoints(points + 1)
      setInputValue('');
    }else{
      setPoints(points - 1)
      setInputValue('');
    }
  }


  return (
    <div className="recuadro">
      <h1>TypeFast</h1>
      <h2>Points: {points} </h2>

      <div className="recuadro-juego">
      <Word onWordChange={handleWordChange} points={points} /> 
      </div>

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
    </div>
  );
};

export default App;
