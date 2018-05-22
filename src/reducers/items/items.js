import { ITEMS_FETCH_DATA_SUCCESS } from '../../const';

const initialState = {
  city: {
    name: 'London',
    coord: {
      lat: 51.51, lon: 0.13
    }
  }
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.payload
        default:
            return state
    }
}

// Action creators
export const itemsFetchDataSuccess = payload => {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        payload
    }
}
