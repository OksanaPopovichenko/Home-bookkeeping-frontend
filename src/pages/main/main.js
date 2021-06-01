import React, { useState, useEffect } from "react";
import { Button, Grid } from '@material-ui/core';
import TotalCosts from '../../components/TotalCosts/TotalCosts';
import './main.scss';
import { Doughnut } from 'react-chartjs-2';
import Input from '../../components/Input/Input';
import SelectList from '../../components/Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Header from '../../components/Header/Header';

const data = {
    labels: ["Spent", "Available"],
    datasets: [
        {
            data: ["351.5", "248.5"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const data_After = {
    labels: ["Spent", "Available"],
    datasets: [
        {
            data: ["441.5", "158.5"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ],
}


const options = {
    data: data,
    legend: {
        display: true
    },
    tooltips: {
        // callbacks: {
        //     label: function(context) {
        //         var label = context.label;

        //         if (label) {
        //             label += context.value + '$'
        //         }
        //         return label;
        //     }
        // }
    }
};

const categories = [
    { value: 0, label: 'Select category', key: 0 },
    { value: 1, label: 'House keeping', key: 1 },
    { value: 2, label: 'Education', key: 2 },
    { value: 3, label: 'Eating out', key: 3 },
    { value: 4, label: 'Transport', key: 4 },
    { value: 5, label: 'Toiletries', key: 5 },
    { value: 6, label: 'Sports', key: 6 },
    { value: 7, label: 'Taxi', key: 7 },
    { value: 8, label: 'Entertainment', key: 8 },
    { value: 9, label: 'Gifts', key: 9 },
    { value: 10, label: 'Clothes', key: 10 },
    { value: 11, label: 'Pets', key: 11 },
    { value: 12, label: 'Health', key: 12 },
    { value: 13, label: 'Car', key: 13 },

]


function Main() {
    const [category, setCategory] = useState();
    const [openNew, setOpenNew] = useState(false);
    const [percent, setPercent] = useState("41.4");
    const [spent, setSpent] = useState("351.5");
    const [available, setAvailable] = useState("248.5");

    const [item, showItem] = useState(false);

    // useEffect(() => {
    //     window.location.reload()
    // }, [])

    return (
        <Grid>
        <Grid className="main-page">

            <Grid>
                <Grid className="today">May 26, 2021</Grid>
                <Grid container wrap="nowrap" className="main-block" justify="center" alignItems="flex-start">
                    <Grid >
                        <Grid>
                            <Grid container wrap="nowrap" justify="flex-start" alignItems="flex-start" >
                                <Grid className="add-purchase">
                                    <p>Add purchase</p>
                                    {!openNew ? <Grid>
                                        <Input inputProps={{
                                            placeholder: "Purchase name",
                                            type: "text"
                                        }} />
                                        <Input inputProps={{
                                            placeholder: "Price",
                                            type: "text"
                                        }} />
                                        <div className={'custom-select'}>
                                            <div className="width">
                                                <FormControl >
                                                    <Select
                                                        value={category}
                                                        displayEmpty
                                                    >
                                                        {renderOptions()}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Grid> :  null}
                                    
                                    {openNew ?<Grid>
                                        <input placeholder="Purchase name" style={{marginBottom: '10px'}}/>
                                        <input placeholder="Price" style={{marginBottom: '10px'}}/>
                                    <div className={'custom-select'}>
                                        <div className="width">
                                            <FormControl >
                                                <Select
                                                    value={110}
                                                    displayEmpty
                                                    >
                                                    {renderOptions()}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                           
                                    </Grid> : null }

                                    <Grid className="btn-wrap" container justify='center'>
                                        <Button variant="contained" className="add-btn" onClick={() => {
                                            setOpenNew(true);
                                            setPercent("26.4");
                                            setSpent("441.5");
                                            setAvailable("158.5");
                                            showItem(true);
                                        }}>Add</Button>
                                    </Grid>
                                </Grid>


                                <Grid className="current-state">
                                    <p className="budget">Your budget: <span className="bold-txt" style={{ color: "#51A195" }}>600$</span></p>
                                    <Grid className="percents">
                                        {percent}%
                                    </Grid>
                                    {!openNew ? <Doughnut data={data} options={options} /> : null}

                                    {openNew ? <Doughnut data={data_After} options={options} /> : null}

                                    <Grid container wrap="nowrap" alignItems="center" justify='space-between' style={{paddingBottom: '20px'}}>
                                        <p>Spent: <span className="bold-txt" style={{ color: "rgba(255, 99, 132, 1)" }}>{spent}$</span></p>
                                        <p>Available: <span className="bold-txt" style={{ color: "rgba(54, 162, 235, 1)" }}>{available}$</span></p>
                                    </Grid>
                                    <Grid style={{minHeight: '17px'}}>
                                        <p style={{display: 'none'}}>Over budget: <span className="bold-txt" style={{ color: "red" }}>0$</span></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="monthly-statistics">
                                <Grid className="wrapper">
                                    <TotalCosts item={item}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="month-stat">
                        <p className="title">Monthly Statistics</p>
                        <ul>
                            <li><p style={{ color: "rgba(75, 192, 192, 1)" }}>Taxi to the store <span className="price">17$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(255, 9, 13,  1)" }}>Grocery <span className="price">22$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(19, 138, 54, 1)" }}>Book "The Lost Symbol"<span className="price">29$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(255, 99, 132, 1)" }}>Paracetamol <span className="price">5.5$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(255, 206, 86, 1)" }}>Dinner at the restaurant <span className="price">56$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(54, 162, 235, 1)" }}>Pillow, blanket <span className="price">17$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(54, 162, 235, 1)" }}>Desk <span className="price">60$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(75, 192, 192, 1)" }}>Taxi to the university <span className="price">21$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(95, 84, 128, 1)" }}>Dress, T-shirt <span className="price">70$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(153, 102, 255, 1)" }}>Sport bag <span className="price">11$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(36, 14, 251, 1)" }}>Dog food <span className="price">10$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            <li><p style={{ color: "rgba(255, 9, 13,  1)" }}>Grocery<span className="price">33$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li>
                            { item ? <li><p style={{ color: "rgba(255, 99, 132, 1)" }}>Entertainment park tickets <span className="price">90$</span></p><FontAwesomeIcon icon={faEdit} className="add-icon" /> <FontAwesomeIcon icon={faTrash} className="add-icon" /></li> : null}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    );
}

export default Main;


const renderOptions = () => {

    return categories.map(option => {
        const { label, value, key } = option;
        return (
            <MenuItem value={value} key={key}>{label}</MenuItem>
        )
    })
}