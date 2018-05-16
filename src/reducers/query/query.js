import { QUERY_SEARCH } from '../../const';

// reducer

export default (state = '', action) => {
    switch (action.type) {
        case QUERY_SEARCH:
            return action.searchBarResult;
        default:
            return state;
    }
}

// Action creators

export const searchBarResult = query => {
    return {
        type: QUERY_SEARCH,
        query
    };
}
