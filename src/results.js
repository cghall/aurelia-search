import {bindable} from 'aurelia-framework';


export class Results {
  @bindable() filterText = '';

  constructor(){
  	this.fullResults = [{country: 'France', group: 'A'},
		         {country: 'Albania', group: 'A'},
		         {country: 'Romania', group: 'A'},
		         {country: 'Switzerland', group: 'A'},
		         {country: 'England', group: 'B'},
		         {country: 'Russia', group: 'B'},
                 {country: 'Slovakia', group: 'B'},
                 {country: 'Wales', group: 'B'},
                 {country: 'Germany', group: 'C'},
                 {country: 'Northern Ireland', group: 'C'},
                 {country: 'Ukraine', group: 'C'},
                 {country: 'Poland', group: 'C'}]
    this.filteredResults = [];
    this.hasFilter = false;
   }

   filterResultsTable(results, filter) {
   	 var filtered = [];
   	 results.forEach(function(result) {
   	 	if (result.country.indexOf(filter) !== -1){
   	 		filtered.push(result)
   	 	}
   	 })
     return filtered;
   }

   filterTextChanged(newValue, oldValue) {
   	 if (newValue !== ''){
   	 	this.hasFilter = true;
   	 	this.filteredResults = this.filterResultsTable(this.fullResults, newValue)
   	 }
     else{
     	this.hasFilter = false;
     	this.filteredResults = [];
     }
   }
}