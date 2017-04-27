import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedFilter} from '../actions/index';

class Filter extends Component{
    render(){
        return <select onChange={(e)=>this.props.selectedFilter(e)}>
                 <option value="default">Select {this.props.type}</option>
                 {this.props.option.map((o, i)=><option value={o}  key={i}>{o}</option>)}
                </select>
}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedFilter: selectedFilter}, dispatch);
}

export default connect(null, matchDispatchToProps)(Filter);