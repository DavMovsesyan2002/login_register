import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import AdsFinder_logos_all from '../img/AdsFinder_logos_all.svg';
import Search from '../img/search.svg';
import User from '../img/signin.svg';

import Login from './Login.js'
import Home from './home.js'


const styles = {
    nav: {
        display:'block',
        height:80,
        background:'#F7F7F7',
    },
    logo:{
        width: '20%',
        float: 'left',
        textAlign: 'right',
        padding: '21px 142px 17px 25px',
    },
    logo_img:{
        width: '133px',
        height: '42px',
    },
    a: {
        width:'80px',
        color:'#000000',
        float:'left',
        textDecoration: 'none',
        fontWeight:'bold',
        textAlign:'center',
        padding:'21px',
    },
    sign_in: {
        width: '150px',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '25px 0 0 136px',
        float: 'left',
    },
    fontSize: {
        fontSize:'1.5rem',
    },
    sign_in_spam: {
        padding:'0px 15px 0 0',
    }
} 
export default function Header(){
    return(
        <Router>
            <nav style={styles.nav}>
                <Link to="/" className='spam_link'><div style={styles.logo}><div><img src={AdsFinder_logos_all} style={styles.logo_img}></img></div></div></Link>
                <a href='' style={styles.a}>Map</a>
                <a href='' style={styles.a}>About us</a>
                <a href='' style={styles.a}>Pricing</a>
                <a href='' style={styles.a}>Blog</a>
                <a href='' style={styles.a}>Contacts</a>
                <div style={styles.sign_in}>
                    <span style={styles.sign_in_spam}>
                        <img src={Search}  width='20px' height='20px'></img>
                    </span> 
                    <span style={styles.sign_in_spam}><Link to="/login" className='spam_link'>Sign in</Link></span>
                    <span style={styles.sign_in_spam}>
                        <img src={User} width='20px' height='20px'></img>
                    </span>
                </div>        
            </nav>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>

        </Router>
    )
}