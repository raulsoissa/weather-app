import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem';


const api_key = "adb866c0cb646005a389d2f8e9268761";
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { 
            forecastData: null 
        };
    }

    componentDidMount() {
        //fetch or axios 
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}
            /> 
        ));
    };

    renderProgress = () => {
        return <h3>Cargando Pronóstico...</h3>;
    };

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div className="forecast-title">
                <h2>Pronóstico de {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) : 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

