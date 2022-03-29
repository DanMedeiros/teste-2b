import React from 'react';
import {useNavigate} from 'react-router-dom';
import loading from './img/loading.gif';

const Form = () => {
  const [city, setValue] = React.useState('');
  const navigate = useNavigate();

  const onChange = e => {
    localStorage.setItem('city', e.target.value);
 
    setValue(e.target.value);
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/result');
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={onChange} placeholder="Buscar por cidade" />
            <input  type="submit" value="Procurar" />
      </form>
    </div>
  );
};
 
export default Form;