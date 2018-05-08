import { ITEMS_FETCH_DATA_SUCCESS } from '../../const';

// reducer 

export default (state = {}, action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

// Action creators

export const itemsFetchDataSuccess = items => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: items
    }
}