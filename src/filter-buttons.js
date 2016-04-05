export class FilterButtons{
	
	constructor(){
		this.labels = [{name: 'First', selected: true},
		               {name: 'Second', selected: false},
		               {name: 'Third', selected: false},
		               {name: 'Fourth', selected: false}];
	}

	onClick(){
		console.log('Button clicked');
	}
}