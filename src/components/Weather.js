import React from "react";
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {CircularProgress} from '@material-ui/core'

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            loader: false,
            temp: null,
            city: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.apiCall = this.apiCall.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    async apiCall(event) {
        this.setState({loader: true,})
        event.preventDefault();
        const apiKey = 'your api key';
        const query = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`;
        const res = await fetch(query);
        const data = await res.json();
        console.log(data);
        this.setState({
            loader: false,
            temp: data.main.temp
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.apiCall}>
                    <TextField id="standard-basic" label="Standard" type="text" name="city" value={this.state.city}
                               onChange={this.handleChange} placeholder="Enter a city"/>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Search</Button>
                </form>
                {this.state.loader ? <CircularProgress color="secondary"/> : null}
                <p>{this.state.temp ? this.state.temp + 'º ' + this.state.city : null}</p>
            </div>
        )
    }

}

export default Weather;
