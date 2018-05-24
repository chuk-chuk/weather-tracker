import { searchQuery } from './searchQuery';

describe('searchQuery', () => {
    describe('action creators', () => {
        describe('QUERY_SEARCH', () => {
            it('should create an action with  type of QUERY_SEARCH', () => {
                const action = searchQuery('text');
                expect(action.searchText).toEqual('text');
                expect(action.type).toEqual('QUERY_SEARCH');
            });
        });
    });
});