import { combineReducers } from 'redux';
import apiData from './apiData/apiData';
import searchQuery from './searchQuery/searchQuery';
import itemsAreLoading from './loading/loading';
import itemsHasErrored from './error/error';

export default combineReducers({
    apiData,
    searchQuery,
    itemsAreLoading,
    itemsHasErrored
});
