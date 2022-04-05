import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weather from './Weather';





function WeatherApi() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [istanbul,setIstanbul] = useState([]);


    // Konum alma, enlem ve boylamını alıp state'leri dolduruyoruz.
    //Kullanıcıdan konum alıyoruz
    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            console.log("Latitude is:", lat)
            console.log("Longitude is:", long)


            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&lang=tr&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }

        fetchData();

    }, [lat, long]);
    


    return (
        <div className="App">
            
            {(typeof data.main != 'undefined') ? (
                <Weather weatherData={data} />
            ) : (
                <div>Konumunuz alınamadı</div>
            )}
            
        </div>
    );
}

export default WeatherApi