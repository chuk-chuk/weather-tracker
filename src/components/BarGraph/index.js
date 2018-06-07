import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export const BarGraph = props => {
  const { weatherData, city } = props;
  const rangeOfDays = weatherData.map((item) => moment(item.dt_txt).format('dddd HH:mm'));
  const temperature = weatherData.map((item) => Math.round(item.main.temp));

  const chartData = {
    labels: rangeOfDays,
    datasets: [
      {
        label: `Temperature in ${city}`,
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
          text: `Weather variations during 5 days in ${city}`,
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

// const mapStateToProps = state => {
//   const { city } = state.apiData;
//   return {
//     location: city.name
//   }
// }

BarGraph.propTypes = {
    city: PropTypes.string,
    weatherData: PropTypes.array
};

// export default connect(null, null)(BarGraph)
export default BarGraph;
