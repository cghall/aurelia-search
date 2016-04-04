import {Results} from '../../src/results';
import {Container} from 'aurelia-dependency-injection';  
import {TemplatingEngine} from 'aurelia-templating';


describe('the Results module', () => {  
  // var results;
  var container;
  var templatingEngine;

  // beforeEach(() => {
  //    results = new Results();
  // });

  it('constructs with a filterText property that is bindable', () => {
  		var attributesFromHTML = {filterText: 'hello'};
  		container = new Container();
  		templatingEngine = container.get(TemplatingEngine);
        var results = templatingEngine.createViewModelForUnitTest(Results, attributesFromHTML);
		expect(results.filterText).toBe('helo');
	});

   it('constructs with a hasFilter property that is false', () => {
		expect(results.hasFilter).toEqual(false);
	});
});