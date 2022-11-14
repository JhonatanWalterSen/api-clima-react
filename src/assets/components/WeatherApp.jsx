import React from 'react'
import { useState, useEffect } from 'react'
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
            console.log(json);
            setWeather(json)
        } catch (error) {
            console.log(error);
        }
    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather}></WeatherMainInfo>
        </div>
    )
}

export default WeatherApp