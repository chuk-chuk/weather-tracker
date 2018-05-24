import { itemsAreLoading } from "../loading/loading";
import { fetchDataSuccess } from "../apiData/apiData";
import { itemsHasErrored } from "../error/error";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchItems = location => {
  return (dispatch) => {
    dispatch(itemsAreLoading(true));
    fetchData(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`)
    .then((data) => {
        dispatch(itemsAreLoading(false));
        dispatch(fetchDataSuccess(data));
    })
    .catch(() => dispatch(itemsHasErrored(true)))
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
