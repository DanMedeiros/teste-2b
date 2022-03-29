import React from 'react';
import {useNavigate} from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const retorno = () => {
        navigate('/');
    } 

  return (
    <div>
      <h1>Encontramos um erro na sua busca!</h1>
      <button onClick={retorno}>Buscar novamente</button>
    </div>
  );
};
 
export default Error;