import React, { Component } from 'react';
import { Search } from '../../Components';


class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: ''
        }
    }

    //get search value and call search method
    searchHandler = (e) => {
        this.setState({
            search: e
        }, this.search)
    }




    render() {
        return (
            <Search searchHandler={this.searchHandler} />
        )
    }
}

export default Display;