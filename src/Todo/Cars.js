import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Results_Cars from './Results_Cars.js'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    search_input_changed:{
        width:'100%',
        height:'44px',
        marginBottom:'19px'
    },
    root: {
        '& > *': {
          width: '165px',
          height:'44px',
        },
      },
    in_div_two_inputs: {
        width:'100%',
        height:'44px',
        marginBottom: '19px',
        /*display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        */
    },
    button_search:{
        width: '350px',
        lineHeight: '44px',
        background: '#E5801A',
        marginBottom: '8px',
    },
    float_left: {
        float:'left',
    },
    float_right: {
        float:'right',
    },
    marginBottom19:{
        marginBottom:'19px'
    },
  }));
export default function Cars(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return(
        <>
            <div className='search_inputs'>
                <div className='real_estate_div'>
                    <div className='inputs_div_cars'>
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Type of Car</InputLabel>
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
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
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
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
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
                    <div className='inputs_div'>
                        <div className={classes.in_div_two_inputs}>
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
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
                        <div className={classes.in_div_two_inputs}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField placeholder id="outlined-basic" label="Outlined" variant="outlined" className={classes.float_left}/>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" className={classes.float_right} />
                            </form>
                        </div>
                        <div className={classes.in_div_two_inputs}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField placeholder id="outlined-basic" label="Baths from" variant="outlined" className={classes.float_left}/>
                                <TextField id="outlined-basic" label="to" variant="outlined" className={classes.float_right} />
                            </form>
                        </div>
                    </div>
                    <div className='inputs_div'>
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Property Type</InputLabel>
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
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Additional Feature</InputLabel>
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
                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Donor Site</InputLabel>
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
                    <div className='inputs_div_flex'>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                        <FormControl variant="outlined" className={classes.formControl,classes.search_input_changed}>
                            <InputLabel id="demo-simple-select-outlined-label">Property Category</InputLabel>
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

                        <Button variant="contained" className={classes.button_search} color="secondary">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <div className="results">
                <Results_Cars />
            </div>
        </>
    )
}