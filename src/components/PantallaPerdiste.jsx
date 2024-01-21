import React from 'react'
import './perdiste.css'

export const PantallaPerdiste = ( {points} ) => {


  return (
    <div className="pantalla-perdiste">
      <h1>¡Te quedaste sin vidas!</h1>
      <h2>Tu puntaje final es: {points}</h2>
      <button>Reiniciar Juego</button>
    </div>
  
   
    
  )
}
