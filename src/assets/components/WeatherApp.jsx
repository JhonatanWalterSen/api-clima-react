import React from 'react'
import { useState } from 'react'
import WeatherForm from './WeatherForm'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${import.meta.env.VITE_REACT_API_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`)
            const json = await request.json()
            console.log(json);
        } catch (error) {
        }
    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>{weather?.currebt.temp_c}</div>
        </div>
    )
}

export default WeatherApp