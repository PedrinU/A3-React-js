import React, { useState } from 'react';

function Saudacao() {
  const [usuario, setUsuario] = useState(''); 

  const tratarMudanca = (evento) => { 
    setUsuario(evento.target.value); 
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite seu nome" 
        value={usuario} 
        onChange={tratarMudanca} 
      />
      <p>Olá, {usuario}!</p> 
    </div>
  );
}

export default Saudacao;
