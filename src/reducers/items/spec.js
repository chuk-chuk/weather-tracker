import { itemsFetchDataSuccess } from './items';

describe('items', () => {
    describe('action creators', () => {
        describe('ITEMS_FETCH_DATA_SUCCESS', () => {
            it('should create an action with  type of ITEMS_FETCH_DATA_SUCCESS', () => {
                const action = itemsFetchDataSuccess([]);
                expect(action.type).toEqual('ITEMS_FETCH_DATA_SUCCESS');
                expect(action.payload).toEqual([]);
            });
            it('should set payload to undefined when no data provided', () => {
                const action = itemsFetchDataSuccess();
                expect(action.payload).toEqual(undefined);
            });
        });
    });
});