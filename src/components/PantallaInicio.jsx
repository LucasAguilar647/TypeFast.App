import React from 'react'
import '../css/inicio.css'

export const PantallaInicio = ( {handleInicioDeJuego} ) => {


  return (
    <div className='pantalla-inicio'>
        <h1>¡Bienvenido a TypeFast!</h1>

        <button
            className='btn-iniciar-juego'
            onClick={ handleInicioDeJuego }
        >
            Iniciar Juego
        </button>
    </div>
  )
}
