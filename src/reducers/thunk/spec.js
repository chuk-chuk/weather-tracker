import fetchMock from 'fetch-mock';
import sinon from 'sinon';

xdescribe('action thunks', () => {

    describe('fetchItems', () => {

        afterEach(() => fetchMock.restore());

        it('should dispatch a SET_ENQUIRY_PRESENTED_EVENT_ID when fetching for quotes', done => {

            fetchMock.get(`http://5826ed963900d612000138bd.mockapi.io/items`, { });

            const dispatchSpy = sinon.spy();

        });
    });
});