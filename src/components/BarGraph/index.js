import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const BarGraph = (props) => {
  console.log('barGraph props', props);
  const rangeOfDays = props.weatherData.map((item) => moment(item.dt_txt).format('dddd HH:mm'));
  const temperature = props.weatherData.map((item) => Math.round(item.main.temp));


  const chartData = {
    labels: rangeOfDays,
    datasets: [
      {
        label: 'weather variations during 5 days',
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
          text: 'Weather forecast for the last 5 days in London',
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
                labelString: 'labels'
            }
        }],
        yAxes: [{
        ticks: {
            max: 30,
            stepValue: 5,
            steps: 10,
            beginAtZero: true
          }
        }]
        },
        hover: {
          mode: 'label'
        },
        showAllTooltips: true,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'green'
          }
        }
      }}
    />
  )
}

export default BarGraph;
