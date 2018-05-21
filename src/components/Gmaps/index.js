import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles.css';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AnyReactComp = ({ text }) => <div>{ text }</div>

export default class Gmaps extends Component {
  static defaultProps = {
    center: { lat: 51.51, lng: 0.13 },
    zoom: 8
  }
  render() {
    return (
      <div style={{ height: '50vh', width: '50%', paddingLeft: '90px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${API_KEY}`,
          }}
          defaultCentre={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComp
            lat={ 51.51 }
            lng={ 0.14 }
            text={`I am on the map`}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
