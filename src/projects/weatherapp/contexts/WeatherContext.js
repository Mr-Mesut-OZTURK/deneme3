import { createContext, useContext, useState, useEffect } from 'react'

const WeatherContext = createContext()

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState("Izmir")
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data)
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
                setError(true)
            })
    }, [city])

    const values = {
        city,
        setCity,
        error,
        loading,
        weather
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext)

