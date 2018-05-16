import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import moment from 'moment';
import './styles.css';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        datasets: [
          {
            label: 'weather variations during 5 days',
            data: [
              21,16,14,18,15, 0
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.3)'
            ]
          }
        ]
      }
    }
  }

  componentDidMount() {
      this.props.fetchItems(`http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=${API_KEY}`);
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom'
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
          <ul>
              {this.props.items.map((item) => (
                  <li key={item.dt}>
                      {moment(item.dt_txt).format('dddd HH:mm')} Temperature {Math.round(item.main.temp)}
                  </li>
              ))}
          </ul>
          <Line
            data={this.state.chartData}
            width={50}
            height={25}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Weather forecast for the last 5 days in London',
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
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
