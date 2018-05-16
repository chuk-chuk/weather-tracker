import { itemsAreLoading } from "../loading/loading";
import { itemsFetchDataSuccess } from "../items/items";
import { itemsHasErrored } from "../error/error";

export const fetchItems = (url) => {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        fetchData(url)
        .then((data) => {
            console.log('data', data);
            dispatch(itemsAreLoading(false));
            dispatch(itemsFetchDataSuccess(data));
        })
        .catch(() => dispatch(itemsHasErrored(true)))
    }
};


const fetchData = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error (response.statusText);
            }

            return response;
        })
        .then((response) => response.json())
}
