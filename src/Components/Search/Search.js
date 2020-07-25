import React, { useRef, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2px'
    },
    paper: {
        textAlign: 'center',
        color: 'black'
    },
    grid: {
        marginTop: "10px",
        marginLeft: "10px",
    },
    box: {
        alignContent: "center"
    }
}));

function Search(props) {
    const classes = useStyles();
    const { searchHandler } = props;
    const textInput = useRef(null);
    const [value, setValue] = useState('name');
    const [data, setData] = useState([]);

    const handleRadio = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {

        if (value === 'category') {
            const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
            axios.get(url)
                .then(response => {
                    setData(response.data.meals);
                })
                .catch(err => {
                    console.log(err);
                })


        } else if (value === 'ingredients') {
            const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
            axios.get(url)
                .then(response => {
                    setData(response.data.meals);
                })
                .catch(err => {
                    console.log(err);
                })
        } else if (value === 'area') {
            const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
            axios.get(url)
                .then(response => {
                    setData(response.data.meals);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }, [value])

    useEffect(() => {
        //for debugging purposes
        console.log(data);
    }, [data])



    return (

        <div className={classes.root}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Search Type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadio} row>
                    <FormControlLabel value="name" control={<Radio />} label="Name" />
                    <FormControlLabel value="firstLetter" control={<Radio />} label="First Letter" />
                    <FormControlLabel value="category" control={<Radio />} label="Category" />
                    <FormControlLabel value="area" control={<Radio />} label="Area" />
                    <FormControlLabel value="ingredients" control={<Radio />} label="Ingredients" />
                </RadioGroup>
            </FormControl>

            <br />
            {(() => {
                switch (value) {
                    //different user input based on what type of search they will be doing
                    case "name": return (
                        <TextField
                            id="searchName"
                            label="Search for meal by name"
                            ref={textInput}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.value,
                                    "type": "searchName"
                                }
                                searchHandler(payload);
                            }}
                        />
                    );

                    case "firstLetter": return (

                        <TextField
                            id="searchLetter"
                            label="Search for meal by first letter"
                            ref={textInput}
                            style={
                                { width: 250 }
                            }
                            inputProps={{ maxLength: 1 }}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.value,
                                    "type": "searchLetter"
                                }
                                searchHandler(payload);
                            }}
                        />
                    );
                    case "category": return (

                        <Autocomplete
                            id="Category"
                            className={classes.box}
                            options={data}
                            getOptionLabel={(data) => data.strCategory}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.innerText,
                                    "type": "searchCategory"
                                }
                                searchHandler(payload);
                            }}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
                        />
                    );
                    case "area": return (

                        <Autocomplete
                            id="Area"
                            className={classes.box}

                            options={data}
                            getOptionLabel={(data) => data.strArea}
                            style={{ width: 300 }}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.innerText,
                                    "type": "searchArea"
                                }
                                searchHandler(payload);
                            }}
                            renderInput={(params) => <TextField {...params} label="Area" variant="outlined" />}
                        />
                    );
                    case "ingredients": return (

                        <Autocomplete
                            id="Ingredients"
                            className={classes.box}

                            options={data}
                            getOptionLabel={(data) => data.strIngredient}
                            style={{ width: 300 }}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.innerText,
                                    "type": "searchIngedients"
                                }
                                searchHandler(payload);
                            }}
                            renderInput={(params) => <TextField {...params} label="Ingredients" variant="outlined" />}
                        />
                    );
                    default: return (
                        <TextField
                            id="searchName"
                            label="Search for meal by name"
                            ref={textInput}
                            onChange={(event) => {
                                let payload = {
                                    "value": event.target.value,
                                    "type": "searchName"
                                }
                                searchHandler(payload);
                            }}
                        />
                    );
                }
            })()}

        </div>
    )


}
export default Search;