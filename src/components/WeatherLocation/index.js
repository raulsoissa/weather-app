import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Lima',
            data: null,
        }
        console.log("constructor")
    }
    
    componentDidMount() {
        this.handleUpdateClick();
    }
    
    
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            // debugger;
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        console.log("render")
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={50}/>
                }
            </div>    
        )
    }
}

export default WeatherLocation;