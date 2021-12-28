import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useWeather } from '../contexts/WeatherContext'
import SelectWeatherImg from './SelectWeatherImg'

const Weathers = () => {

    const { error, loading, weather } = useWeather()

    if (error) {
        return (
            <Box sx={{ backgroundColor: '#d30707' }}>
                <Typography>Error!</Typography>
            </Box>
        )
    }

    if (loading) {
        return (
            <Box sx={{ backgroundColor: '#ceb751' }}>
                <Typography>Loading!</Typography>
            </Box>
        )
    }

    return (
        <Box>
            <Typography>{weather.name}</Typography>
            <Card>
                {
                    weather.weather && weather.weather.map(item => (
                        <CardContent key={item.id}>
                            <Typography>{item.description}</Typography>
                            <Typography>{item.main}</Typography>
                            <SelectWeatherImg text={item.description} />
                        </CardContent>

                    ))
                }

                {
                    weather.main && (
                        <>
                            <Typography>F : {weather.main.feels_like}</Typography>
                            <Typography>humidity : {weather.main.humidity}</Typography>
                        </>
                    )
                }
            </Card>
        </Box>
    )
}

export default Weathers
