import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, WINDY } from '../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "adb866c0cb646005a389d2f8e9268761";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const data = {
    temperature: 10,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 30,
    wind: '2    0 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        }
    }
    
    handleUpdateClick = () => {
        console.log("updated");
        this.setState({
            city: 'Santiago',
            data: data2,
        })
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