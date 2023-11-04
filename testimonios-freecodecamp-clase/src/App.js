import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio'
import  users  from '.componentes/Users'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {
            users.map((user, index) => {
              return (<Testimonio
                key={user.id}
                nombre={user.nombre}
                pais={user.pais}
                imagen={user.imagen}
                alt={user.nombre}
                cargo={user.cargo}
                empresa={user.empresa}
                testimonio={user.testimonio} />);
            })
          }

        </div>

      </div>
    );

  }
}




export default App;
