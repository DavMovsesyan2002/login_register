import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AdsFinder_logos_all from '../img/AdsFinder_logos_all.svg';
import Location from '../img/location.svg'; 
import Message from '../img/message.svg'; 

import Pinterest from '../img/pinterest.svg'; 
import Linkedin from '../img/linkedin.svg'; 
import Facebook from '../img/facebook.svg'; 
import Twitter from '../img/twitter.svg'; 
import Google from '../img/google.svg'; 

const useStyles = makeStyles({
    footer:{
        display:'block',
        height:'224px',
        padding: '24px 160px 0 202px',
    },
    logo_footer:{
        display:"block",
        marginBottom:'13px'
    },
    logo_img:{
        width:'133px',
        height:'42px',
    },  
    footer_text_div:{
        display:'block',
    },
    footer_text:{
        width:'19%',
        height:'113px',
        float:'left',
        marginRight:'89px',
    },
    font20_orange:{
        fontSize:'20px',
        color:'#E5801A',
        fontWeight:'bold',
        marginBottom: '5px',
    },
    font17:{
        fontSize:'17px',
    },
    block:{
        display:'block',
        marginBottom:'7px',
    },
    foot:{
        fontSize:'17px',
        display: 'flex',
        alignItems: 'center',
    },
    dis_flex:{
        width: '190px',
        display: 'flex',
        justifyContent: 'space-between',
    }
  });
  
  export default function Foo() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <footer className={classes.footer}>
          <div className={classes.logo_footer}>
            <img src={AdsFinder_logos_all} className={classes.logo_img}></img>
        </div>
        <div className={classes.footer_text_div}>
            <div className={classes.footer_text}>
                <div className={classes.font20_orange}>About us</div>
                <div className={classes.font17}>
                Adsfinder.ie is first world 
                class service which provide you 
                opportunity to know new added 
                AD right after it is appear 
                in the World Wide Web.
                </div>
            </div>
            <div className={classes.footer_text}>
                <div className={classes.font20_orange}>Contact</div>
                <div className={classes.font17}>
                    <div className={classes.block}><img src={Location} width='20px' height='20px'></img> Address: Cork, Ireland</div>
                    <div className={classes.block}><img src={Message} width='20px' height='20px'></img> Email:support@adsfinder.ie</div>
                    <div className={classes.dis_flex}>
                        <img src={Google} width='20px' height='20px'></img>
                        <img src={Twitter} width='20px' height='20px'></img>
                        <img src={Facebook} width='20px' height='20px'></img>
                        <img src={Pinterest} width='20px' height='20px'></img>
                        <img src={Linkedin} width='20px' height='20px'></img>
                    </div>
                </div>
            </div>
            <div className={classes.footer_text}>
                <div className={classes.font20_orange}>Helpful Links</div>
                <div className={classes.font17}>
                    <div className={classes.block}>Terms & Conditions</div>
                    <div className={classes.block}>Supports</div>
                    <div className={classes.block}>Privacy Politics</div>
                </div>
            </div>
            <div className={classes.footer_text}>
                <div className={classes.font20_orange}>Information</div>
                <div className={classes.font17}>
                    <div className={classes.block}>About us</div>
                    <div className={classes.block}>Pricing</div>
                    <div className={classes.block}>Blog</div>
                </div>
            </div>
        </div>
      </footer>
    );
  }