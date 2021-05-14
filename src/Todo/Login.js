import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Register from './Register.js';
import Loginn from './Loginn.js';
import Forgot from './forgot.js';

const useStyles = makeStyles((theme) => ({
    login_div:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '650px',
        width:'100%',
        marginBottom: '30px',
    },
    logins:{
        width:'352px',
        height:'300px',
    },
    login_row_first:{
        width:'100%',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:'20px'
    },
    sign_div_text:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '40%',
    },
    forgot_div:{
        width:'60%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

export default function Login(){
    const classes = useStyles();
    return(
        <Router>
            <div className={classes.login_div}>
                <div className={classes.logins}>
                
                        <div className={classes.login_row_first}> 
                            <div className={classes.sign_div_text}>
                                <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/login" className='spam_link'>Sign in</NavLink></span>
                                <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/register" className='spam_link'>Sign up</NavLink></span>
                            </div>
                            <div className={classes.forgot_div}> <NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}}  to="/forgot" className='spam_link'>Forgot</NavLink></div>
                        </div>
                        <Route exact path="/login" component={Loginn}/>
                        <Route exact path="/register" component={Register} /> 
                        <Route exact path="/forgot" component={Forgot} /> 
                
                </div>
            </div>
            
        </Router>
    )
}