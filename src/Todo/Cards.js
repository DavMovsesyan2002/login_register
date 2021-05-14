import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import images from '../img/nkar1.png'; // Tell webpack this JS file uses this image
import Location from '../img/location.svg'; 
import Bed from '../img/bed.svg';
import Bathroom from '../img/bath.svg';
import Compare from '../img/compare.svg';
import Like from '../img/like.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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

export default function Cards(){
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
                            Dunmaniheen, Killka street, 14
                            <div className={classes.price}>
                                <span className={classes.price_text}>15000 $</span>
                                <span className={classes.fontSize_17}>Rent</span>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <div className={classes.price}>
                                <span className={classes.fontSize_20}>Let.ie</span>
                                <span className={classes.fontSize_17}>01.12.19</span>
                            </div>
                            <div className={classes.price}>
                                <span className={classes.fontSize_17}><img src={Location} width='20px' height='20px'></img> Waterloo, Fairhill</span>
                                <span className={classes.fontSize_17}>House</span>
                            </div>
                            <div className={classes.price}>
                                <span className={classes.fontSize_17}><img src={Bed} width='20px' height='20px'></img> 4 Beds</span>
                                <span className={classes.fontSize_17}><img src={Bathroom} width='20px' height='20px'></img> 2 Bathroom</span>
                            </div>
                            <div className={classes.price}>
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