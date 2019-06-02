import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer'
import HomeReducer from "./HomeReducer";

export default combineReducers({
    login: LoginReducer,
    home: HomeReducer
});