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
        </div>
    );

}

export default Header;