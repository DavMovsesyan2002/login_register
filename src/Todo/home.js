import React, {Component} from 'react';
import Router_Link from './Router_Link.js'
import Results from './Results.js'
import API from '../Todo/api.js';

export default class Home extends Component {
    state = {
        persons: []
      }
    
    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        };
        API.get('users',config).then(
            res => {
                const persons = res.data;
                this.setState({ persons });
            },
            err => {
                console.log(err);
            }
        );
    }

    render(){
        /*if(this.state.persons){
            return (
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
        
            )
        }*/
        return(
            <>
                <div className='search_div'> 
                    <Router_Link /> 
                </div> 
                <div className="results">
                    <Results />
                </div>
            </>
        )
    }
}