import {Search} from '../../src/search';

describe('the Search module', () => {
	var search;

	beforeEach( () => {
		search = new Search();
	});

	it('constructs with a filterText property', () => {
		expect(search.filterText).toEqual('');
	});
  })
