import React, {Component} from 'react';
import {connect} from 'react-redux';
import Movie from '../components/Movie';


class Grid extends Component{
    
    renderMovieList(){
        const data = this.props.data;
        const filter = this.props.filter;
        var filteredArray = [];
        
        if(data&&filter===null||filter==='default'){
            return data.Search.map((m, i)=><Movie title={m.Title} src = {m.Poster} key={i} />)
        }
        else if(filter){
                var splitFilter = filter.split('–')[0];
                if(!isNaN(splitFilter)){
                    console.log(splitFilter)
                data.Search.map(m=>{
                    if(m.Year===filter){
                        filteredArray.push(m);
                    }
                });
               return filteredArray.map((m, i)=><Movie title={m.Title} src = {m.Poster} key={i} />);
                }  
                else{
                filteredArray = [];
                   data.Search.map(m=>{
                    if(m.Type===filter){
                        filteredArray.push(m);
                    }
                });
               return filteredArray.map((m, i)=><Movie title={m.Title} src = {m.Poster} key={i} />);
               }
                                        }
        
        else
        return <div></div>
    }
                            
    render(){
        return <div>{this.renderMovieList()}</div>
        }


}
    

function mapStateToProps(state) {
    return {
        data: state.data,
        filter: state.filter
    };
}

export default connect(mapStateToProps)(Grid);