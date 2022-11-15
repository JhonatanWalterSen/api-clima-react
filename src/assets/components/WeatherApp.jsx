import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Clima | ${weather?.location.name ?? ""}`
    }, [weather])

    async function loadInfo(city = 'lima') {
        try {
            const request = await fetch(`${import.meta.env.VITE_REACT_API_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`)
            const json = await request.json()
            setTimeout(() => {
                setWeather(json)
            }, 3500);
        } catch (error) {
            return console.log(error.message);
        }
    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading/>}
        </div>
    )
}

export default WeatherApp