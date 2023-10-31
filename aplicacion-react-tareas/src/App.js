import './App.css';
import Freecodeamplogo from './componentes/Freecodeamplogo';
import ListaDeTareas from './componentes/ListaDeTareas';
// import Tarea from './componentes/Tarea'
import React from 'react';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Freecodeamplogo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />

      </div>
    </div>
  );
}

export default App;
