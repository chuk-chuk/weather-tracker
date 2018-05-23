import { itemsHasErrored } from './error';

describe('error', () => {
    describe('action creators', () => {
        describe('ITEMS_HAS_ERRORED', () => {
            it('should create an action with  type of ITEMS_HAS_ERRORED and default value false', () => {
                const action = itemsHasErrored(false);
                expect(action.hasErrored).toEqual(false);
                expect(action.type).toEqual('ITEMS_HAS_ERRORED');
            });
        });
    });
});