import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from '../components/Filter';


class Filters extends Component{
    
    renderList(){
        const data = this.props.data;
        const filterYear = [];
        const filterType = [];
        if(data){
            data.Search.map((m, i)=>{
                if(filterYear.indexOf(m.Year)<0)
                filterYear.push(m.Year);
                if(filterType.indexOf(m.Type)<0){
                    console.log(filterType.indexOf(m)<0)
                filterType.push(m.Type);
                }
                                    });
            console.log(filterYear);
            
               return <div><Filter type={'Release Date'} option={filterYear}/>
                   <Filter type={'Type'} option = {filterType}/>
                   </div>

              
        
        }
        else{
        return <div></div>
    }
    }
    
    render(){
        return <div>{this.renderList()}</div>
}
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps)(Filters);