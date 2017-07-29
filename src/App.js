import axios from 'axios'
import React, { Component } from 'react'

import EventCard from './EventCard'

const dataUrl = 'https://services5.arcgis.com/ZUCWDRj8F77Xo351/arcgis/rest/services/Logan_City_Council_Community_Centre_Programs_2017/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&sqlFormat=none&f=pjson&token='

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
  componentDidMount = () => {
    axios.get(dataUrl)
    .then(response => {
      this.setState({
        data: response.data.features,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className='container'>
        {this.state.data.map(event => <EventCard key={event.attributes.FID} event={event} />)}
      </div>
    );
  }
}

export default App;
