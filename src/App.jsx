import React, { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Card from './Card';

function App() {
  const [infoIngresada, setInfoIngresada] = useState(null);
  const [error, setError] = useState('');

  const handleInfoIngresada = (marca, modelo) => {
    setInfoIngresada({ marca, modelo });
  };

  const handleReset = () => {
    setInfoIngresada(null);
    setError('');
  };

  return (
    <div className="App">
      <h1>Mi auto favorito</h1>
      <Formulario onInfoIngresada={handleInfoIngresada} onReset={handleReset} />
      {error ? (
        <p>{error}</p>
      ) : (
        infoIngresada && <Card marca={infoIngresada.marca} modelo={infoIngresada.modelo} />
      )}
    </div>
  );
}

export default App;
