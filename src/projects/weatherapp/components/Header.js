import { FormControl, FormLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import citiesData from "../cities.json";
import { useWeather } from '../contexts/WeatherContext';

const Header = () => {

    const { city, setCity } = useWeather()
    const [cities, setCities] = useState([])

    useEffect(() => {
        setCities(citiesData.cities.map(item => item["Sehir-Bilgileri"]))
    }, [])

    return (
        <FormControl>
            <FormLabel id="cities" htmlFor="cities">Cities</FormLabel>
            <Select
                labelId="cities"
                name="cities"
                value={city || ""}
                onChange={(e) => setCity(e.target.value)}
            >
                {
                    cities.map((item) => (
                        <MenuItem key={item.plaka} value={item.sehir}>{item.sehir}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default Header
