import { CHANGE_ITEMS_STATE } from '../../const';

export const ITEMS_STATE = {
    initial: 'initial',
    loading: 'loading',
    error: 'error',
    done: 'done',
}

// reducer 
export default (state = ITEMS_STATE.initial, action) => {
    switch (action.type) {
        case CHANGE_ITEMS_STATE:
            return action.payload;
        default:
            return state;
    }
}

export const changeItemsState = state => {
    return {
        type: CHANGE_ITEMS_STATE,
        payload: state
    };
}
