import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const BarGraph = (props) => {

  const chartData = {
    labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    datasets: [
      {
        label: 'weather variations during 5 days',
        data: [21,16,14,18,15, 0],
        pointHitRadius: 20,
        pointRadius: 2,
        lineTension: 0.4,
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(75, 192, 192, 1)'
      }
    ]
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
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
        tooltips: {
          enabled: false
        },
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
