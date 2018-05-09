import { itemsAreLoading } from "../reducers/loading/loading";
import { itemsFetchDataSuccess } from "../reducers/items/items";
import { itemsHasErrored } from "../reducers/error/error";

export const fetchItems = (url) => { 
    return (dispatch) => {
        dispatch(itemsAreLoading(true));

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error (response.statusText);
            }
            dispatch(itemsAreLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)))
    }
};
