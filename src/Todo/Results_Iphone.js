import React from 'react';
import Like from '../img/like.svg'; // Tell webpack this JS file uses this image
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cards_Iphone from './Cards_Iphone';

const useStyles = makeStyles((theme) => ({
    pagination: {
        width: '30%',
        margin: 'auto',
        padding:'25px 0 0 0',
      },
      root: {
        '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
            backgroundColor: 'white',
            color:'#E5801A',
           },
        },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    results_div:{
        display: 'block',
        height: '220px',
        padding: '31px 197px 77px 202px',
    },
    results_text:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:'35px',
        textAlign: 'center',
    },
    like_img:{
        width:'32px',
        height:'28px',
        marginRight:'49px'
    },
    like_div:{
        width:'35%',
        alignItems: 'center',
        display: 'flex',
    },
    Res_text:{
        width:'35%',
        fontSize: '35px',
        fontWeight: 'bold',
    },
    sorting_div:{
        width:'35%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    float_left: {
        float:'left',
    },
    float_right: {
        float:'right',
    },
    select_result:{
        width:'350px',
        height:'44px'
    },
    marginRight:{
        marginRight: '50px',
    },
    divs:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orange:{
        color:'#E5801A',
    },
  }));

export default function Results_Real_Estate(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
        <div className={classes.results_div}>
            <div className={classes.results_text}>
                <div className={classes.like_div}>
                    <img src={Like} className={classes.like_img}></img>
                    1-16 of 2,567 results
                </div>
                <div className={classes.Res_text}>
                    Results
                </div>
                <div className={classes.sorting_div}>
                    <div className={classes.float_left,classes.marginRight}>Sorting</div>
                    <div className={classes.float_right}>
                    <FormControl variant="outlined" className={classes.formControl,classes.select_result}>
                        <InputLabel id="demo-simple-select-outlined-label">from cheap to expensivenpx</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                </div>
           </div>
            <div className={classes.divs}>
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
            </div>
            <div className={classes.divs}>
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
            </div>
            <div className={classes.divs}>
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
            </div>
            <div className={classes.divs}>
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
                <Cards_Iphone />
            </div>
            <div className={classes.pagination}>
                <Pagination className={classes.root} count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}