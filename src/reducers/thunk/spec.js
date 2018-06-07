import fetchMock from 'fetch-mock';
import { fetchItems, fetchData } from './thunkAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { itemsAreLoading } from '../loading/loading';
import { itemsHasErrored } from '../error/error';
import { fetchDataSuccess } from '../apiData/apiData';

const mockStore = configureMockStore([thunk]);

describe('fetchItems', () => {

    it('checks fetchData call', () => {
        const testData = {id: 1};
        fetchMock.get('*', testData);
        
        const apiResult = fetchData()
        .then(response => {
            expect(response).toEqual(testData)
        })
        fetchMock.restore();
        return apiResult;
    });

    it('should dispatch correct actions when fetching to do', done => {
        const store = mockStore({});
        
        store.dispatch(fetchItems('city'))
        
        setTimeout(() => {
            expect(store.getActions()).toMatchSnapshot();
            done();
        }, 0);
    });

    it('should dispatch a fetchDataSuccess', done => {
        const initialState = {};
        const store = mockStore(initialState);

        const testData = {id: 1};
        fetchMock.get('*', testData);
        
        store.dispatch(fetchItems('city'));

        const actions = store.getActions();

        setTimeout(() => {
            expect(actions.length).toEqual(4);
            console.log(actions)
            expect(actions[0]).toEqual(itemsHasErrored(false));
            expect(actions[1]).toEqual(itemsAreLoading(true));
            expect(actions[2]).toEqual(itemsAreLoading(false));
            expect(actions[3]).toEqual(fetchDataSuccess(testData));
            done();
        }, 0);        

        fetchMock.restore();
    });

});
