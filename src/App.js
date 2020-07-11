import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Cordoba,ar',
  'Santiago,cl',
  'Washington,us',
  'Madrid,es'
]
class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  };
  
  render() {
    return (
      <div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    ); 
}
}

export default App;
