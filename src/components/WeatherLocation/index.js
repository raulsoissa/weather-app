import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';


const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Lima',
            data: data,
        }
    }
    
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
        });
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>    
        )
    }
}

export default WeatherLocation;