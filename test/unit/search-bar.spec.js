import {SearchBar} from '../../src/search-bar';
import {Container} from 'aurelia-dependency-injection';  
import {BehaviorInstruction} from 'aurelia-templating';


describe('the SearchBar module', () => {
	var searchBar;

	beforeEach( () => {
      new Container().makeGlobal();
      searchBar = BehaviorInstruction.unitTest(searchBar);
	});

	it('constructs with the correct heading', () => {
		//Instantiate new SearchBar because heading not set on beforeEach()
		let searchBar = new SearchBar();
		expect(searchBar.heading).toEqual('Welcome to the Aurelia Search App');
	});

	it('has a filterText property that is bindable', () => {
		searchBar.filterText = 'a value';
		expect(searchBar.filterText).toBe('a value');
	});
  })