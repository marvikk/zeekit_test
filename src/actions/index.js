import axios from 'axios';

export function fetchData(term){
    if(!term){
        alert('Enter movie name!')
        return;
    }
    console.log('action called')
    const url = 'http://www.omdbapi.com/?s='+term;
    
    return function(dispatch){
        axios.get(url).then(response=> {
            console.log(response)
            return dispatch({
            type: 'DATA_FETCHED',
            payload: response.data
        })
        })
                                       
    }
    
}

export function selectedFilter(e){
    console.log(e.target.value);
    
    return{
        type:'FILTER_SET',
        payload:e.target.value
    }
}