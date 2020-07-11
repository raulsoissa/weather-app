import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Cordoba,ar',
  'Santiago,cl',
  'Washington,us',
  'Madrid,es'
]
class App extends Component {

  constructor() {
    super();
    this.state = { city: 'Nueva Ciudad' }
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  };
  
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                <ForecastExtended city={this.state.city}/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    ); 
}
}

export default App;
