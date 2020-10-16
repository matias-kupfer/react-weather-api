import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Weather from "./components/Weather";

function App() {
    return (
        <div>
            <h1>Weather APP</h1>
            <Weather/>
        </div>
    );
}

export default App;
