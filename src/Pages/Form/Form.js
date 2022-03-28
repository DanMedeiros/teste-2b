import React, { useEffect } from 'react';
import Result from '../Result/Result';

const Form = () => {

    const city = '';
    
  const onChange = e => {

    localStorage.setItem('city', e.target.value);
 
  };
 
  const handleSubmit = e => {
    e.preventDefault();
  }


    const [form, setForm] = ""

    useEffect((form) => {
        if(localStorage.getItem("city") == ""){
            <Result />
        }
    },[form])


  return (
    <>
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text" value={city} onChange={onChange} />
              <input type="submit" value="Enviar" />
          </form>
      </div>
      <>
        {form ? form : setForm}</>
      </>
  );
};
 
export default Form;