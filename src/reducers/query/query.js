import { QUERY_SEARCH } from '../../const';

// reducer
export default (state = '', action) => {
  switch (action.type) {
    case QUERY_SEARCH:
      return action.searchText
    default:
      return state
  }
}

// Action creators
export const searchBarQuery = searchText => {
  return {
    type: QUERY_SEARCH,
    searchText
  }
}
