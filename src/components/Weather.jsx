import React, {useState, useEffect} from 'react'
import {Button, Card, InputBase, makeStyles, Divider, Typography, CardContent} from '@material-ui/core';
import axios from 'axios';
import Clouds from '../clouds.svg'
import Rain from '../raining.svg'
import Sun from '../sun.svg'

const apiKey = 'f45a3023b3867dddf88677ed0b1be53f';
const useStyles = makeStyles(theme => ({
    card: {
        height: '35vh',
        backgroundColor: 'grey',
        margin: '1vh',
        backgroundColor: '#c7c4cc',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2354544b' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
    },
    input: {
        width: '15vh',
        backgroundColor: 'white',
        borderRadius: '2px',
        marginLeft: '1.5vh',
        marginTop: '1vh',
        fontSize: '1.5vh',
        paddingLeft: '1vh'
    },
    button: {
        marginLeft: '3.8vh',
        marginTop: '1vh',
        width: '10vh',
    },
    img: {
        width: '5vh',
        heigth: '5vh',
        marginLeft: '6vh',
        marginTop: '1vh',
    },
    content: {
        marginTop: '-1vh',
        marginLeft: '0.5vh',
    },
    temps: {
        fontWeight: 'bold'
    }
}));

const Weather = () => {
    const classes = useStyles();
    const [city, setCity] = useState('');
    const [requestedCity, setRequestedCity] = useState({});
    const [weather, setWeather] = useState('');
    const [error, setError] = useState(false);

    const makeWeatherRequest = someCity => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${someCity}&appid=${apiKey}`)
            .then(res => res.data)
            .then(city => setRequestedCity(city))
            .catch(e => {
                console.log(e);
                setError(true);
            });

        setCity('');
    }

    const handleChange = e => {
        setCity(e.target.value);
    }

    useEffect(() => {
        makeWeatherRequest('New York')
    }, [])

    useEffect(() => {
        if(requestedCity.name && requestedCity.weather[0].main === 'Clouds') {
            setWeather('clouds');
        } else if (requestedCity.name && requestedCity.weather[0].main === 'Rain') {
            setWeather('rain');
        } else {
            setWeather('clear')
        }

        return () => console.log('After rendering...')
    }, [requestedCity])

    return (
            <Card className={classes.card} >
                    <InputBase placeholder="Country..." className={classes.input} onChange={handleChange} value={city}/>
                    <Button color='secondary' variant='contained' className={classes.button} onClick={() => makeWeatherRequest(city)}>
                        SEARCH
                    </Button>
                    {weather === 'clouds' ? <img className={classes.img} src={Clouds} /> : null}
                    {weather === 'rain' ? <img className={classes.img} src={Rain} /> : null}
                    {weather === 'clear' ? <img className={classes.img} src={Sun} /> : null}
                    <Divider/>
                    <CardContent className={classes.content}>
                        <Typography variant="h6" color='secondary'>
                            {requestedCity.name && `${requestedCity.name}, ${requestedCity.sys.country}`}
                        </Typography>
                        <Divider/>
                        <Typography variant="h6" >
                            {requestedCity.name ? `T: ${requestedCity.main.temp}K` : null}
                        </Typography>
                        <Typography variant="body1" className={classes.temps} >
                            {requestedCity.name ? `TMax: ${requestedCity.main.temp_max}K` : null}
                        </Typography>
                        <Typography variant="body1" className={classes.temps} >
                            {requestedCity.name ? `TMin: ${requestedCity.main.temp_min}K` : null}
                        </Typography>
                        <Typography variant="body1" className={classes.temps} >
                            {requestedCity.name ? `Humidity: ${requestedCity.main.humidity}%` : null}
                        </Typography>
                    </CardContent>
            </Card>
    )
}

export default Weather
