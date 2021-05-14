import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import API from '../Todo/api'

const useStyles = {
    login_row_second:{
        width:'100%',
    },
    login_input:{
        width:'100%',
        marginBottom:'10px',
    },
    login_button:{
        width:'100%',
        height:'48px',
        background:'#E5801A',
        border:'none',
        fontWeight:'900',
        textTransform:'none',
        cursor:'pointer',
        color:'white',

    },
};


export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        API.post('users', data)
        .then(res => {
                localStorage.setItem('token',res.data.token);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={useStyles.login_row_second}>

                    
                    <TextField id="outlined-basic" style={useStyles.login_input} label="Email" onChange={e => this.email = e.target.value}  variant="outlined" />
                    <TextField id="outlined-basic" style={useStyles.login_input} label="Password" onChange={e => this.password = e.target.value} variant="outlined" />
                    <button style={useStyles.login_button}>
                        Sign in
                    </button>
                </div>
            </form>
        )
    }
}