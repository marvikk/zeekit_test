import React, {Component} from 'react';

class Movie extends Component{
    render(){
    return(        
    <div onClick={()=>console.log(this.props.data)}>
        <img src={this.props.src} /><br></br>
        <h1>{this.props.title}</h1>
    </div>
    )
    
}
}

export default Movie;