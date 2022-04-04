import moment from 'moment';
import React from 'react';
import './styles.css';


const Weather = ({ weatherData }) => (
    <div className='container'>
        <div className="main">
            <div className='top'>
                <p className="header"><p className='sehir'>{weatherData.name}</p></p>
                <p className="header"><p className='sehir'>{weatherData.sys.country}</p></p>
            </div>


            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
            </div>


            <div className="flex">
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>


            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                
            </div>

            


        </div>
    </div>
)

export default Weather;