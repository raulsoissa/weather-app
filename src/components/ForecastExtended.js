import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformForecast from '../services/transformForecast';
import ForecastItem from '../components/ForecastItem/index';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes',
//     'Sábado',
//     'Domingo'
// ];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal'
// }

const api_key = "adb866c0cb646005a389d2f8e9268761";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();

        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        //fetch or axios 
        const url_forescast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forescast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays() {
        return <h1>Render Items</h1>;
        //return days.map(day => <ForecastItem weekDay={day} hour={9} data={data} key={day}/> )
    }

    renderProgress = () => {
        return <h3>Cargando...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
        <div className="forecast-title">
            <h2>Pronóstico de {city}</h2>
            {forecastData ?
                this.renderForecastItemDays() :
                this.renderProgress()
            } 
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

