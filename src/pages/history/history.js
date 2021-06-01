import { Grid } from '@material-ui/core';
import DatepickerField from '../../components/Datepicker/Datepicker';
import './history.scss';
import { Bar, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const data = {
    labels: ['Food',
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
                min: 0,
                // max: 100,
                stepValue: 10,
                callback: function (value) {
                    return (value.toString().length >= 6) ? value.toFixed(2) : value
                },
                padding: 10
            },
            // gridLines: {
            //     drawOnChartArea: false
            // },
            scaleLabel: {
                display: true,
                labelString: 'Spent money, $'
            }
        }],
        xAxes: [{
            barThickness: 24,
            // gridLines: {
            //     drawOnChartArea: false
            // },
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

const year = {
    labels: ['Food',
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
            data: [1055, 577, 179, 156, 98, 70, 300, 560, 234, 370, 36, 65, 200],
            // data: [{x: "2021-01-01", y: 15}, {x: "2021-05-26", y: 18}],
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



const options_year_bar = {
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                parser: 'YYYY/MM/DD',
                unit: 'month',
                displayFormats: {
                    day: 'YYYY/MM/DD'
                },
                tooltipFormat: 'YYYY/MM/DD',
                min:'2021/01/01',
                max:'2021/12/31'
            },
            ticks: {
                maxTicksLimit: 12,
                padding: 10,
                suggestedMin: '2021/01/01',
            },

        }],
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: false,
                padding: 10
            },
            scaleLabel: {
                display: true,
                labelString: 'Spent money, $'
            },
            ticks: {
                suggestedMin: 0,
            },
        }]
    },
    legend: {
        display: false
    },
}

const year_bar = {
    datasets: [
        {
            // data: [1055, 577, 179, 156, 98, 70, 300, 560, 234, 370, 36, 65, 200],
            // data: [{x:'2021-01-31', y:580}, {x:'2021-02-31', y:480}, {x:"2021-03-31", y:580}, {x:"2021-04-31", y:680}, {x:"2021-05-31", y:351}],
            //data: [{x:'2021-01-31', y:580}, {x:'2021-02-31', y:480}, {x:"2021-03-31", y:580}, {x:"2021-04-31", y:680}, {x:"2021-05-31", y:351}],
            data: [{x:'2021-01-15', y:454}, {x:'2021-02-15', y:480}, {x:'2021-03-15', y:587}, {x:'2021-04-15', y:560}, {x:'2021-05-15', y:351.5}],
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

function History() {
    return (
        <Grid className="main-page">
            <Grid className="today">Monthly Statistics</Grid>
            <Grid className="day">May 1, 2021 - May 26, 2021 <FontAwesomeIcon icon={faChevronDown} className="add-icon" /> </Grid>
            <Grid container wrap="nowrap">
                <Grid className="chart chart-1">
                    <Grid className="date-range" container wrap="nowrap">
                        <DatepickerField startDate={new Date("2021-05-01")} />
                        <DatepickerField startDate={new Date("2021-05-26")} />
                    </Grid>
                    <Bar data={data} options={options} />
                </Grid>
                <Grid className="chart">
                    <Grid className="date-range" container wrap="nowrap">
                        <DatepickerField startDate={new Date("2021-05-01")} />
                        <DatepickerField startDate={new Date("2021-05-26")} />
                    </Grid>
                    <Line data={data} options={options} />
                </Grid>
            </Grid>

            <Grid className="today" style={{ marginTop: '70px' }}>Annual Statistics</Grid>
            <Grid className="day">2021 <FontAwesomeIcon icon={faChevronDown} className="add-icon" /></Grid>
            <Grid container wrap="nowrap">
                <Grid className="chart chart-1">
                    <Grid className="date-range" container wrap="nowrap">
                        <DatepickerField startDate={new Date("2021-01-01")} />
                        <DatepickerField startDate={new Date("2021-12-31")} />
                    </Grid>
                    <Bar data={year_bar} options={options_year_bar} />
                </Grid>
                <Grid className="chart">
                    <Grid className="date-range" container wrap="nowrap">
                        <DatepickerField startDate={new Date("2021-01-01")} />
                        <DatepickerField startDate={new Date("2021-12-31")} />
                    </Grid>
                    <Line data={year} options={options} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default History;
