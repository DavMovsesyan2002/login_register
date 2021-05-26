import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cars from './Cars.js'
import Electronics from './Electronics.js'
import Real_Estate from './Real_Estate.js'

export default function Router_Link(){
    return(
    <Router>
        <div className='search_div'> 
            <div className='margin_div_search'>
                <div className='search_text'>
                    <span className='search_spam'><Link to="/Cars" className='spam_link'>Cars</Link></span>
                    <span className='search_spam'><Link to="/Real_Estate" className='orange'>Real Estate</Link></span>
                    <span className='search_spam'><Link to="/Electronics" className='spam_link'>Electronics</Link></span>
                </div>
            </div>
            <Switch>
                <Route path="/Cars">
                    <Cars />
                </Route>
                <Route path="/Real_Estate">
                    <Real_Estate />
                </Route>
                <Route path="/Electronics">
                    <Electronics />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}