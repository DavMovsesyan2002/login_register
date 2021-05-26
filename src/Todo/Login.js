import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import Register from './Register.js';
import Sign_in from './Sign_in.js';
import Forgot from './Forgot.js';


export default function Login(){
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Sign_in}/>
                <Route  path="/register" component={Register} /> 
                <Route  path="/forgot" component={Forgot} />
            </Switch>
        </Router>
    )
}