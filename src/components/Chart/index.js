import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import './styles.css';
import BarGraph from '../BarGraph';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Chart extends Component {

  componentDidMount() {
      this.props.fetchItems(`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${API_KEY}`);
  }

  render(){
      if (this.props.hasErrored) {
          return <p>Sorry! There was an error loading the items</p>;
      }
      if(this.props.isLoading) {
          return <p>Loading…</p>;
      }
      console.log('payload', this.props);
      console.log(this.state);

      return (
        <div>
          <BarGraph weatherData={this.props.items}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.results.list || [],
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsAreLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (url) => dispatch(fetchItems(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
