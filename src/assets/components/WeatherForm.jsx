import React from 'react'
import { useState } from 'react'

const WeatherForm = ({ onChangeCity }) => {
    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value
        if (value !== '') {
            setCity(value)
        }
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        /* if (city === typeof undefined) {
            return console.log('No existe lugar');
        } */
        onChangeCity(city)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={onChange}/>
        </form>
    )
}

export default WeatherForm