import {Results} from '../../src/results';
import {Container} from 'aurelia-dependency-injection';  
import {TemplatingEngine} from 'aurelia-templating';


describe('the Results module', () => {  
  var results;
  var container;
  var templatingEngine;

  beforeEach(() => {
     results = new Results();
  });

  it('constructs with a filterText property that is bindable', () => {
  		container = new Container();
  		templatingEngine = container.get(TemplatingEngine);
        var results = templatingEngine.createViewModelForUnitTest(Results);
  		results.filterText = 'hello';
		expect(results.filterText).toBe('hello');
	});

   it('constructs with a hasFilter property that is false', () => {
		expect(results.hasFilter).toEqual(false);
	});

   it('sets hasFilter to true when filterText is updated', () => {
   	    new Container().makeGlobal();
        let results = BehaviorInstruction.unitTest(Results);
  		results.filterText = 'hello';
		expect(results.hasFilter).toEqual(true);
	});
});