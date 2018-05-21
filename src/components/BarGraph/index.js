import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const BarGraph = (props) => {
  console.log('PROPS barGraph', props);
  const { weatherData, location } = props;

  const rangeOfDays = weatherData.map((item) => moment(item.dt_txt).format('dddd HH:mm'));
  const temperature = weatherData.map((item) => Math.round(item.main.temp));

  const chartData = {
    labels: rangeOfDays,
    datasets: [
      {
        label: `Temperature in ${location.charAt(0).toUpperCase() + location.substr(1)}`,
        data: temperature,
        pointHitRadius: 20,
        pointRadius: 2,
        lineTension: 0.4,
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(75, 192, 192, 1)'
      }
    ]
  };

  return (
    <Line
      data={chartData}
      width={50}
      height={25}
      options={{
        title: {
          display: true,
          text: `Weather variations during 5 days in ${location.charAt(0).toUpperCase() + location.substr(1)}`,
          fontSize: 25
        },
        layout: {
          padding: {
            left: 80,
            right: 80,
            bottom: 20,
            top: 20
          }
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Displayed'
            }
        }],
        yAxes: [{
        ticks: {
            max: 45,
            stepValue: 5,
            beginAtZero: true
          }
        }]
        },
        showAllTooltips: true,
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            fontColor: 'green'
          }
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    location: state.location || 'London'
  }
}

BarGraph.propTypes = {
    location: PropTypes.string.isRequired,
    weatherData: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, null)(BarGraph)
