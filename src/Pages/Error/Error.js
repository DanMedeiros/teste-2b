import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Error.css';
const Error = () => {
    const navigate = useNavigate();

    const retorno = () => {
        navigate('/');
    } 

  return (
    <div className='error'>
      <h1>Encontramos um erro na sua busca!</h1>
      <button onClick={retorno}>Buscar novamente</button>
    </div>
  );
};
 
export default Error;