import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ onInfoIngresada, onReset }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [error, setError] = useState('');

  const handleMarcaChange = (e) => {
    setMarca(e.target.value);
  };

  const handleModeloChange = (e) => {
    setModelo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (marca.trim().length < 3 || marca.trimStart() !== marca) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (modelo.length < 1) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');

    onInfoIngresada(marca, modelo);


  };

  const handleReset = () => {
    setMarca('');
    setModelo('');
    onReset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca:</label>
          <input type="text" value={marca} onChange={handleMarcaChange} />
        </div>
        <div>
          <label>Modelo:</label>
          <input type="text" value={modelo} onChange={handleModeloChange} />
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>Restablecer</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Formulario;