import React, {Component} from 'react';
import Head from './Head';
import Body from './Body';

class Root extends Component{
    render(){
    return(
        <div>
            <Head className='head'/>
            <Body />
        </div>
    )
    }
}

export default Root;