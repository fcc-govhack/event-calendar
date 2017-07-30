import axios from 'axios'
import React, { Component } from 'react'

import EventCard from './EventCard'
<<<<<<< HEAD
import logo from './images/logo.png'
=======
import logo from './images/logo.jpg'
import sun from './images/sun.png'
import cloud from './images/cloud.png'
import rain from './images/rain.png'
>>>>>>> 01202f43076b51a50e6f4e35037012f2dfcfd5e9


const API_KEY = "f5449d38cf868aa4137d3523f8c760a7";
const dataUrl = 'https://services5.arcgis.com/ZUCWDRj8F77Xo351/arcgis/rest/services/Logan_City_Council_Community_Centre_Programs_2017/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&sqlFormat=none&f=pjson&token='
const COST = 'COST'
const IS_FREE = 'FREE'
const IS_PAID = 'IS_PAID'

const WEATHER = {
  'clear sky': sun,
  'few clouds': sun,
  'scattered clouds': cloud,
  'broken clouds': cloud,
  'shower rain': rain,
  'rain': rain,
  'thunderstorm': rain,
  'snow': rain,
  'mist': cloud,
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      filters: {
        COST: '',
      },
      weather: '',
    }
  }
  componentDidMount = () => {
    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=loganlea,au&apikey=${API_KEY}`)
    .then(response => {
      this.setState({
        weather: response.data.weather[0].description,
      })
    })
        
    axios.get(dataUrl)
    .then(response => {
      this.setState({
        data: response.data.features,
        filteredData: response.data.features,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  applyFilters = () => {
    let filteredEvents = this.state.data
    const { filters } = this.state
    if (filters.COST === IS_FREE) {
      filteredEvents = filteredEvents.filter(event => {
        return event.attributes.Cost.toUpperCase() === IS_FREE
      })
    } else {
      if (filters.COST === IS_PAID) {
        filteredEvents = filteredEvents.filter(event => {
        return event.attributes.Cost.toUpperCase() !== IS_FREE
      })
      }
    }
    this.setState({
      filteredData: filteredEvents,
    })
  }
  handleOnClick = (type, value) => {
    const newFilter = Object.assign({}, this.state.filters, { [type]: value })
    this.setState({
      filters: newFilter,
    }, () => {
      this.applyFilters()
    })
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-logo">
            <img className="logo-img" src={logo} alt='App logo' />
            <p className="logo">EVENTURER</p>
            <p className="weather"><img src={ WEATHER[this.state.weather] } alt='weather icon' /></p>
          </div>
          <div>
            <button onClick={() => this.handleOnClick(COST, IS_FREE)}>Free</button>
            <button onClick={() => this.handleOnClick(COST, IS_PAID)}>Not Free</button>
            <button onClick={() => this.handleOnClick(COST, '')}>Reset</button>
          </div>
        </div>
        {this.state.filteredData.map(event => (
          <EventCard
            event={event}
            key={event.attributes.FID}
          />
        ))}
      </div>
    );
  }
}

export default App;
