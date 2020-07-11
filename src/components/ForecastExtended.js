import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
        <div className=""><h1>{city}</h1></div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

