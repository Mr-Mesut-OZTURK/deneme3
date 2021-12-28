import { Container, Grid, Paper, styled } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import Weathers from './components/Weathers'
import { WeatherProvider } from './contexts/WeatherContext'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const WeatherApp = () => {
    return (
        <WeatherProvider>
            <Container>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    <Grid item xs={8}>
                        <Item>
                            <Header />
                        </Item>
                    </Grid>

                    <Grid item xs={8}>
                        <Item>
                            <Weathers />
                        </Item>
                    </Grid>

                </Grid>
            </Container>
        </WeatherProvider>
    )
}

export default WeatherApp
