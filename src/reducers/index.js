import counterReducer from './counter';
import isLoggerReducer from './isLogge';
import {combineReducers} from 'redux';


const allReducer =  combineReducers({
    counter: counterReducer,
    isLogged: isLoggerReducer
});


export default allReducer;
