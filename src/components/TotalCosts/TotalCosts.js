import React from "react";
import './TotalCosts.scss';
import { Bar } from 'react-chartjs-2';

const data = {
    labels:  ['Food',
    'House keeping',
    'Education',
    'Eating out',
    'Taxi',
    'Sports',
    'Transport',
    'Entertainment',
    'Gifts',
    'Clothes',
    'Pets',
    'Health',
    'Car',
    ],
    datasets: [
        {
            data: [55, 77, 29, 56, 38, 11, 0, 0, 0, 70, 10, 5.5, 0],
            backgroundColor: [
                'rgba(255, 9, 13, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(19, 138, 54, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(215, 53, 128, 0.4)',
                'rgba(162, 127, 128, 0.4)',
                'rgb(95, 84, 128, 0.4)',
                'rgba(36, 14, 251, 0.4)',
                'rgba(127, 183, 190, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)'
            ],
            borderColor: [
                'rgba(255, 9, 13, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(19, 138, 54, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(215, 53, 128, 1)',
                'rgba(162, 127, 128, 1)',
                'rgb(95, 84, 128, 1)',
                'rgba(36, 14, 251, 1)',
                'rgba(127, 183, 190, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
        },
    ],
}

const data_2 = {
    labels:  ['Food',
    'House keeping',
    'Education',
    'Eating out',
    'Taxi',
    'Sports',
    'Transport',
    'Entertainment',
    'Gifts',
    'Clothes',
    'Pets',
    'Health',
    'Car',
    ],
    datasets: [
        {
            data: [55, 77, 29, 56, 38, 11, 0, 90, 0, 70, 10, 5.5, 0],
            backgroundColor: [
                'rgba(255, 9, 13, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(19, 138, 54, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(215, 53, 128, 0.4)',
                'rgba(162, 127, 128, 0.4)',
                'rgb(95, 84, 128, 0.4)',
                'rgba(36, 14, 251, 0.4)',
                'rgba(127, 183, 190, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)'
            ],
            borderColor: [
                'rgba(255, 9, 13, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(19, 138, 54, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(215, 53, 128, 1)',
                'rgba(162, 127, 128, 1)',
                'rgb(95, 84, 128, 1)',
                'rgba(36, 14, 251, 1)',
                'rgba(127, 183, 190, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
        },
    ],
}

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 10,
                padding: 10
            },
            gridLines: { 
                // drawOnChartArea: false
            },
            scaleLabel: {
                display: true,
                labelString: 'Spent money, $'
            }
        }],
        xAxes:[{
            barThickness:34,
            gridLines: { 
                // drawOnChartArea: false
            },
            ticks: {
                padding: 10
            }
        }],
    },
    legend: {
        display: false
    },
    tooltips: {
        mode: 'label',
        intersect: false
    },
    responsive: true
}

export default function TotalCosts(props) {
    return (
        <div>
            <Bar data={!props.item ? data : data_2} options={options}/>
        </div>
    )
}
