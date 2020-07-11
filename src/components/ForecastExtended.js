import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from '../components/ForecastItem/index';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
        <div className="forecast-title">
            <h2>Pronóstico de {city}</h2>
            <ForecastItem/>
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

