import { ImageList } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import sunny from '../assets/sunny.png';
import partly_cloudy from '../assets/partly_cloudy.png';
import cloudy from '../assets/cloudy.png';
import rain_light from '../assets/rain_light.png';
import rain_s_cloudy from '../assets/rain_s_cloudy.png';
import rain from '../assets/rain.png';
import snow_light from '../assets/snow_light.png';
import snow_s_rain from '../assets/snow_s_rain.png';

const SelectWeatherImg = ({ text }) => {


    const SelectImage = () => {
        if(text==="clear sky") return sunny
        if(text==="scattered clouds") return partly_cloudy
        if(text==="broken clouds") return partly_cloudy
        if(text==="overcast clouds") return cloudy
        if(text==="few clouds") return cloudy
        if(text==="Clouds") return rain_light
        if(text==="fog") return rain_s_cloudy
        if(text==="Clouds") return rain
        if(text==="Clouds") return snow_light
        if(text==="Clouds") return snow_s_rain
    }

    return (
        <Box>
            <ImageList>
                <img 
                    src={SelectImage()}
                    alt={text}
                />
            </ImageList>
        </Box>
    )
}

export default SelectWeatherImg
