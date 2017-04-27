import {combineReducers} from 'redux';
import reducerData from './reducerData';
import reducerFilter from './reducerFilter';

const allReducers = combineReducers({
  data: reducerData,
    filter: reducerFilter
});

export default allReducers;