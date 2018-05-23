import { ITEMS_HAS_ERRORED } from '../../const';

// reducer 
export default (state = false, action) => {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

// Action creators
export const itemsHasErrored = bool => {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}