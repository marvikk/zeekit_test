import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';


class SearchBar extends Component {
    
    constructor(){
        super();
        this.state = {term:''}
    }
    
    onInputChange(term) {
        this.setState({term:term})
  }


    render(){
        return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} placeholder='Search'/>
        <button onClick={()=>this.props.fetchData(this.state.term)}>Show me</button>
        <div></div>
      </div>
        );
    }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchData: fetchData}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBar);