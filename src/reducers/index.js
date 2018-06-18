import { combineReducers } from 'redux';
import apiData from './apiData/apiData';
import searchQuery from './searchQuery/searchQuery';
import itemsState from './error/error';

export default combineReducers({
    apiData,
    searchQuery,
    itemsState
});
