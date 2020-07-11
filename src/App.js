import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Cordoba,ar',
  'Santiago,cl',
  'Washington,us',
  'Madrid,es'
]
function App() {
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
