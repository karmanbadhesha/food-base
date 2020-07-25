import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Search, Meals } from '../../Components';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';



const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: 'black'
    },
    grid: {
        marginTop: "10px",
        marginLeft: "10px",
    }
});

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: '',
            search: ''
        }
    }

    //get search value and call search method
    searchHandler = (e) => {
        this.setState({
            search: e
        }, this.search)
    }

    //clears rows
    clearRow = (e) => {
        this.setState({
            rows: ''
        });
    }

    search() {
        console.log(this.state.search);
        let url = "";
        if (this.state.search.type === "searchName") {
            url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.search.value;

        } else if (this.state.search.type === "searchLetter") {
            url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + this.state.search.value;

        } else if (this.state.search.type === "searchCategory") {
            url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.state.search.value;

        } else if (this.state.search.type === "searchArea") {
            url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + this.state.search.value;

        } else if (this.state.search.type === "searchIngedients") {
            url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + this.state.search.value;
        }

        axios.get(url)
            .then(response => {
                const meals = response.data.meals;
                var mealRows = [];

                meals.forEach((meal) => {
                    console.log(meal);
                    const thumbnail = meal.strMealThumb;
                    const eachMeal = <Meals meal={meal} thumbnail={thumbnail} key={meal.idMeal} />
                    console.log(eachMeal);
                    mealRows.push(<Grid item xs={2} key={meal.idMeal}>
                        {eachMeal}
                    </Grid>)
                })
                console.log(mealRows);
                this.setState({ rows: mealRows });
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <Search searchHandler={this.searchHandler} searchType={this.searchType} />
                <Button variant="outlined" color="primary" onClick={this.clearRow}>Clear</Button>
                <Grid container spacing={1}>
                    {this.state.rows}
                </Grid >
            </div>
        )
    }
}

export default Display;