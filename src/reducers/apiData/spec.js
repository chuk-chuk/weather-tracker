import { fetchDataSuccess } from './apiData';

describe('apiData', () => {
    describe('action creators', () => {
        describe('FETCH_DATA_SUCCESS', () => {
            it('should create an action with  type of FETCH_DATA_SUCCESS', () => {
                const action = fetchDataSuccess([]);
                expect(action.type).toEqual('FETCH_DATA_SUCCESS');
                expect(action.payload).toEqual([]);
            });
            it('should set payload to undefined when no data provided', () => {
                const action = fetchDataSuccess();
                expect(action.payload).toEqual(undefined);
            });
        });
    });
});