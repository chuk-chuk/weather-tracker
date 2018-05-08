import { combineReducers } from 'redux';
import { itemsFetchDataSuccess } from './items/items';
import { itemsAreLoading } from './loading/loading';
import { itemsHasErrored } from './error/error';

export default combineReducers({
    itemsFetchDataSuccess,
    itemsAreLoading,
    itemsHasErrored
});