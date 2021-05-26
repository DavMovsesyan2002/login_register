import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    NavLink,
  } from "react-router-dom";

  
export default function Forgot(){
    return(
        <div className='login_div'>
            <div className='logins'>
                <div className='login_row_first'> 
                    <div className='sign_div_text'>
                        <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/login" className='spam_link'>Sign in</NavLink></span>
                        <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/register" className='spam_link'>Sign up</NavLink></span>
                    </div>
                    <div className='forgot_div'> <NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/forgot" className='spam_link'>Forgot</NavLink></div>
                </div>
                <div className='login_row_second'>
                    <TextField id="outlined-basic" className='login_input' label="Email" variant="outlined" />
                    <TextField id="outlined-basic" className='login_input' label="New password" variant="outlined" />
                    <TextField id="outlined-basic" className='login_input' label="Confirm password" variant="outlined" />
                    <Button variant="contained" className='login_button'>
                        Change
                    </Button>
                </div>
            </div>
        </div>
    )
}