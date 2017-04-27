import React, {Component} from 'react';
import Grid from '../containers/Grid';
import Filters from '../containers/Filters';


class Body extends Component{
    render(){
    return(
    <div className='bodyComp'>
    <Filters />
    <Grid />
    </div>
    )
    }
}

export default Body;