import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function Search(props) {
    const { search } = props;
    const textInput = useRef(null);
    const [value, setValue] = useState('name');

    const handleRadio = (event) => {
        setValue(event.target.value);
    }

    return (



        <div>

            <FormControl component="fieldset">
                <FormLabel component="legend">Search Type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadio} row>
                    <FormControlLabel value="name" control={<Radio />} label="Name" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>

            {/* <TextField
                id="search"
                label="Search"
                ref={textInput}
                onChange={(event) => {
                    search(event.target.value);
                }}
            /> */}


        </div>
    )


}
export default Search;