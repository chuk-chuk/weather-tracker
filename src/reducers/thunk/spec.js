import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import { fetchItems, fetchData } from './thunkAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe.only('fetchItems', () => {

    afterEach(() => fetchMock.restore());

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

    xit('should dispatch a fetchDataSuccess', done => {

    });

});
