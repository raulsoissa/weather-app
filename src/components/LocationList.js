import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = ( city ) => {
        console.log(city);
        onSelectedLocation(city);
    };

    const strToComponents = (cities) => (
        cities.map( city  => 
            <WeatherLocation 
                key={city.key} 
                city={city.name}
                data={city.data}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
            /> 
        )
    );
    return (<div className="locationList">
        {strToComponents(cities)}
    </div>
)};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;