import { ITEMS_ARE_LOADING } from '../../const';

// Reducer

export default (state = false, action) => {
    switch (action.type) {
        case ITEMS_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

// Action creators

export const itemsAreLoading = bool => {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    }
}