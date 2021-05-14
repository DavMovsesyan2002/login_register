import React, { Component } from 'react'
import axios from 'axios'


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import API from '../Todo/api'

const useStyles = {
    login_row_second:{
        width:'100%',
    },
register_input:{
    width:'100%',
    marginBottom:'10px',
},
register_button:{
    width:'100%',
    height:'48px',
    background:'#E5801A',
    border:'none',
    color:'white',
    fontWeight:'900',
    textTransform:'none',
    cursor:'pointer'
},
checbox:{
    padding:'15px 0 15px 0',
},
};

export default class Register extends Component{
    state = {
        email: '',
        password:'',
        confirmPassword:'',
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    
        API.post(`users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div style={useStyles.login_row_second}>
                        <TextField id="outlined-basic" name='name' onChange={e => this.email = e.target.value} style={useStyles.register_input} label="Email" variant="outlined" />
                        <TextField id="outlined-basic" name='password' onChange={e => this.password = e.target.value} style={useStyles.register_input} label="Password" variant="outlined" />
                        <TextField id="outlined-basic" name='confirmPassword' onChange={e => this.confirmPassword = e.target.value} style={useStyles.register_input} label="Repeat Password" variant="outlined" />
                        <FormGroup row style={useStyles.checbox}>
                            <FormControlLabel control={<Checkbox name="checkedC" />} label="By creating an account you agree to our Terms of Service and Privacy Policy" />
                        </FormGroup>
                        <button style={useStyles.register_button}>
                            Sign up
                        </button>   
                </div>
            </form> 
        )
    }
}