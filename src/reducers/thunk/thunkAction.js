import { fetchDataSuccess } from "../apiData/apiData";
import { changeItemsState, ITEMS_STATE } from "../error/error";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchItems = location => {
  return (dispatch) => {
    
    dispatch(changeItemsState(ITEMS_STATE.loading));
    fetchData(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`)
    .then((data) => {
      console.log(data)
        dispatch(changeItemsState(ITEMS_STATE.done));
        dispatch(fetchDataSuccess(data));
    })
    .catch(() => dispatch(changeItemsState(ITEMS_STATE.error)));
  }
};

export const fetchData = url => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
}
