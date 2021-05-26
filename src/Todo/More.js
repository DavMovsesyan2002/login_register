import React,{Component} from 'react';
import Like from '../img/like.svg';

export default class More extends Component{
    render(){
        return(
            <>
                <div className='more_div'>
                    <div className='more_about_divs'>
                        <div className='more_name_text'>
                            <span className='more_name_text_span_1'>Dunmaniheen, Killka street, 14</span>
                            <span>
                                <img src={Like} width='20px' height='20px'></img>
                            </span>
                            <span>23 000$</span>
                        </div>
                        <div className='more_div_about'>

                        </div>
                    </div>
                    <div className='more_about_divs'>
                        asdasd
                    </div>
                </div>
            </>
        )
    }
}