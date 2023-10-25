import React from "react"
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'


const Freecodeamplogo = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
);

export default Freecodeamplogo;