import React from 'react';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';



function Header() {

    return (
        <div>
            <table className="App-header">
                <tbody>
                    <tr>
                        <td><FastfoodIcon /></td>
                        <td>
                            <Typography variant="h3">Food Base</Typography>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>To use this app, simply select the type of search you wish to conduct and type into the search field, or select a value from the drop down.</p>
        </div>
    );

}

export default Header;