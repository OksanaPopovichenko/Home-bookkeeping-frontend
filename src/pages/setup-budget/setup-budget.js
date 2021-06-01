import React, { useState } from "react";
import { Grid, Button } from '@material-ui/core';
import Input from '../../components/Input/Input';
import './setup-budget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function SetupBudget() {
    const [price, setPrice] = useState("600");
    const [budget, setNewBudget] = useState(false);
    const [newCategory, setNewCategory] = useState(false);

    return (
        <Grid className="main-page setup">
            <Grid container 
                wrap="nowrap" 
                alignItems='flex-start' 
                justify="center">
                <Grid className="add-category-block">
                    <Grid className="title">Categories</Grid>
                    <Grid className="add-category-wrap" 
                        container 
                        wrap="nowrap" 
                        alignItems='center' 
                        className="new-field"
                        justify="flex-start">
                        {!newCategory ? 
                        <Input inputProps={{
                            placeholder: "Add category",
                            type: "text"
                        }}/> : <input  placeholder="Add category"/>}
                        <Grid className="plus">
                            <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={() => {
                        setNewCategory(true)
                    }}/>
                        </Grid>
                    </Grid>
                    <ul className="list">
                        <li><Category data={"Food"}/></li>
                        <li><Category data={"House keeping"}/></li>
                        <li><Category data={"Car"}/></li>
                        <li><Category data={"Eating out"}/></li>
                        <li><Category data={"Transport"}/></li>
                        <li><Category data={"Toiletries"}/></li>
                        <li><Category data={"Sports"}/></li>
                        <li><Category data={"Taxi"}/></li>
                        <li><Category data={"Gifts"}/></li>
                        <li><Category data={"Clothes"}/></li>
                        <li><Category data={"Pets"}/></li>
                        <li><Category data={"Health"}/></li>
                        <li><Category data={"Entertainment"}/></li>
                        {newCategory ? <li><Category data={"Equipment"}/></li> : null}
                    </ul>
                    <Button variant="contained" className="btn save-1" onClick={() => {
                        setNewCategory(true)
                    }}>
                        Save
                    </Button>
                </Grid>
                <Grid className="budget-wrap">
                    <Grid className="title">Set budget</Grid>
                    <Grid className="curr-txt">
                        Your current budget: <span className="bolt-txt">{price}$</span>
                    </Grid>
                    <Grid>
                        {!budget ?
                        <Input inputProps={{
                            placeholder: "Set a new budget",
                            type: "text"
                        }}/> : <input placeholder="Set a new budget"/>}
                    </Grid>
                    <Button variant="contained" className="btn btn-2" onClick={() => {
                        setNewBudget(true);
                        setPrice("700");
                    }}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SetupBudget;


const Category = (props) => {
    return (
        <Grid container 
            wrap="nowrap" 
            alignItems='center' 
            justify="flex-start">
            <p>{props.data}</p>
            <Grid>
                <FontAwesomeIcon icon={faEdit} className="add-icon" />
                <FontAwesomeIcon icon={faTrash} className="add-icon" />
            </Grid>
        </Grid>
    )
}
