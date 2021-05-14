import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
        textTransform:'none'
    }
}));

export default function Forgot(){
    const classes = useStyles();
    return(
        <div className={classes.login_row_second}>
            <TextField id="outlined-basic" className={classes.login_input} label="Email" variant="outlined" />
            <TextField id="outlined-basic" className={classes.login_input} label="New password" variant="outlined" />
            <TextField id="outlined-basic" className={classes.login_input} label="Confirm password" variant="outlined" />
            <Button variant="contained" className={classes.login_button}  color="secondary">
                Change
            </Button>
        </div>
    )
}