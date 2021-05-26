import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AdsFinder_logos_all from '../img/AdsFinder_logos_all.svg';
import Search from '../img/search.svg';
import User from '../img/signin.svg';

import Login from './Login.js'
import Home from './Home.js'
import More from './More.js'
import Register from './Register.js'
import Forgot from './Forgot.js'

export default function Header(){
    return(
        <Router>
            <nav className='header_nav'>
                <Link to="/" className='spam_link'>
                    <div className='logo'>
                        <div>
                            <img src={AdsFinder_logos_all} className='logo_img'></img>
                        </div>
                    </div>
                </Link>
                <a href='' className='header_a'>Map</a>
                <Link to="/"  className='header_a'>About us</Link>
                <Link to="/" className='header_a'>Pricing</Link>
                <a href='' className='header_a'>Blog</a>
                <a href='' className='header_a'>Contacts</a>
                <div className='sign_in'>
                    <span className='sign_in_spam'>
                        <img src={Search}  width='20px' height='20px'></img>
                    </span> 
                    <span className='sign_in_spam'>
                        <Link to="/login" className='spam_link'>Sign in</Link>
                    </span>
                    <span className='sign_in_spam'>
                        <img src={User} width='20px' height='20px'></img>
                    </span>
                </div>        
            </nav>  
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/more" component={More} />
                <Route  path="/register" component={Register} />
                <Route  path="/forgot" component={Forgot} />
            </Switch>
        </Router>
    )
}