import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import './styles.css';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class Gmaps extends Component {
  static defaultProps = {
    zoom: 8
  }

  render() {
    return (
      <div style={{ height: '50vh', width: '80%', paddingLeft: '100px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${API_KEY}`,
          }}
          defaultCentre={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}>
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { city } = state.results
  return {
    center: {
      lat: city.coord.lat,
      lng: city.coord.lon
    }
  }
}

Gmaps.propTypes = {
    center: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Gmaps)
