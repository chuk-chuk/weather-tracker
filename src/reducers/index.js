import { combineReducers } from 'redux';
import results from './items/items';
import itemsAreLoading from './loading/loading';
import itemsHasErrored from './error/error';

export default combineReducers({
    results,
    itemsAreLoading,
    itemsHasErrored
});
