import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import images from '../img/iphone.jpg'; // Tell webpack this JS file uses this image
import Location from '../img/location.svg'; 
import Compare from '../img/compare.svg';
import Like from '../img/like.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    res_div:{
        width:'349px',
        height:'562px',
        borderRadius:'15px',
        marginBottom:'44px'
    },
    media: {
        width:'100%',
        height: 350,
        borderRadius:'15px',
    },
  fontSize_22: {
    fontSize:'22px',
  },
  fontSize_20: {
    fontSize:'20px',
  },
  fontSize_30:{
    fontSize:'40px',
  },
  fontSize_17: {
    fontSize:'17px',
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price_end: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:'15px',
  },
  price_text:{
    fontSize:'22px',
    fontWeight:'bold',
  },
  span_three:{
    //width:'35%',
    display: 'flex',
    alignItems: 'center',
    color:'#E5801A',
  },
}));

export default function Cards_Cars(){
    const classes = useStyles();

    return(
                <Card className={classes.res_div}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={images}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom className={classes.fontSize_22}>
                            Samsung Galaxy S10, 128 GB
                            <div className={classes.price}>
                                <span className={classes.price_text}>15000 $</span>
                                <span className={classes.fontSize_17}></span>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <div className={classes.price}>
                                <span className={classes.fontSize_20}>Expert</span>
                                <span className={classes.fontSize_17}>01.12.19</span>
                            </div>
                            <div className={classes.price}>
                                <span className={classes.fontSize_17}><img src={Location} width='20px' height='20px'></img> Waterloo, Fairhill</span>
                                <span className={classes.fontSize_17}>Phone</span>
                            </div>
                            <div className={classes.price}>
                               
                            </div>
                            <div className={classes.price_end}>
                                <span className={classes.fontSize_17}><img src={Compare} width='20px' height='20px'></img> Compare</span>
                                <span className={classes.fontSize_17}><img src={Like} width='20px' height='20px'></img></span>
                                <span className={classes.span_three}>More <ArrowRightAltIcon className={classes.fontSize_30}></ArrowRightAltIcon></span>
                            </div>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
    )
}