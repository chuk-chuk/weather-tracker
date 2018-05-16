import { itemsAreLoading } from './loading';

describe('loading', () => {
    describe('action creators', () => {
        describe('ITEMS_ARE_LOADING', () => {
            it('should create an action with  type of ITEMS_ARE_LOADING and default value to false', () => {
                const action = itemsAreLoading(true);
                expect(action.isLoading).toEqual(true);
                expect(action.type).toEqual('ITEMS_ARE_LOADING');
            });
        });
    });
});