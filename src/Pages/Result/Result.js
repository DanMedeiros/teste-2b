import React, { useEffect, useState } from "react";
import api from "../../Services/Api/Api";

const Key = '111a11eac95e3153131322962ac5db5e';

function Result() {
  const [data, setUser] = useState();

  const city = localStorage.getItem("city");
  
  useEffect(() => {
    api
      .get(`weather?q=${city}&appid=${Key}&units=metric&lang=pt_br`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(data)

  return (
    <div className="Result">
        <div className="Result-content-name">
            <h1>{data?.name}</h1>
        </div>
        <div className="Result-content-temp">
            <div className="Result-content-temp-min">
                <p>{Math.round(data?.main.temp_min) + "ºC"}</p>
            </div>
            <div className="Result-content-temp-now">
                    <span><img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}/></span>
                <p>{Math.round(data?.main.temp) + "ºC"}</p>
            </div>
            <div className="Result-content-temp-max">
                <p>{Math.round(data?.main.temp_max) + "ºC"}</p>
            </div>
        </div>
    </div>
  );
}

export default Result;