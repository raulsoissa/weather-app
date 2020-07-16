import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { setSelectedCity, setWeather }  from '../actions';

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities)    
    }
    

    handleSelectedLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList 
              cities={this.props.cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = (dispatch) => ({ 
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

//esto es el componenete App pero con la inyección del connect
export default connect(null, mapDispatchToProps)(LocationListContainer);
