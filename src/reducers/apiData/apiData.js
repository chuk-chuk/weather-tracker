import { FETCH_DATA_SUCCESS } from '../../const';
import { CITY } from '../../const';

const initialState = {
  city: {
    name: CITY,
    coord: {
      lat: 51.51, lon: 0.13
    }
  }
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return action.payload
        default:
            return state
    }
}

// Action creators
export const fetchDataSuccess = payload => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}
