import React, { Component, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import api from "../../Services/Api/Api";
import './Result.css';

const Key = '111a11eac95e3153131322962ac5db5e';

function Result() {
  const [data, setData] = useState(0);
  const city = localStorage.getItem("city");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`weather?q=${city}&appid=${Key}&units=metric&lang=pt_br`)
      .then((response) => {
        setData(response.data)

        }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        navigate('/error');
      });
  }, []);

  const toTime = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return hours + ":" + minutes;
  }

  return (
    <div className="Result">
        <div className="Result-content">
            <div className="Result-content-name">
                <h1>{data?.name}</h1>
            </div>
            <div className="Result-content-temp">
                <div className="Result-content-temp-min">
                    <span>Mínima</span>
                    <p>{Math.round(data?.main.temp_min) + "ºC"}</p>
                </div>
                <div className="Result-content-temp-now">
                    <span><img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt="" /></span>
                    <p>{Math.round(data?.main.temp) + "ºC"}</p>
                    <h4>{data?.weather[0].description}</h4>
                </div>
                <div className="Result-content-temp-max">
                    <span>Máxima</span>
                    <p>{Math.round(data?.main.temp_max) + "ºC"}</p>
                </div>
            </div>
        </div>
        <div className="Result-extra">
            <div className="Result-extra-content">
                <div className="Result-extra-content-title">
                    <p>Umidade: </p>
                </div>
                <div className="Result-extra-content-info">
                    <p>{data?.main.humidity}</p>
                </div>
            </div>
            <div className="Result-extra-content">
                <div className="Result-extra-content-title">
                    <p>Nascer do sol:</p> 
                </div>
                <div className="Result-extra-content-info">
                    <p>{toTime(data?.sys.sunrise)}</p> 
                </div>
            </div>
            <div className="Result-extra-content">
                <div className="Result-extra-content-title">
                    <p>Pôr do sol: </p>
                </div>
                <div className="Result-extra-content-info">
                    <p>{toTime(data?.sys.sunset)}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Result;