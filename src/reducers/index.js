import { combineReducers } from 'redux';
import results from './items/items';
import location from './query/query';
import itemsAreLoading from './loading/loading';
import itemsHasErrored from './error/error';

export default combineReducers({
    results,
    location,
    itemsAreLoading,
    itemsHasErrored
});
