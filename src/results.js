import {bindable} from 'aurelia-framework';


export class Results {
  @bindable() filterText = '';

  filteredResults = [];

  fullResults = [{country: 'France', group: 'A'},
		         {country: 'Albania', group: 'A'},
		         {country: 'Romania', group: 'A'},
		         {country: 'Switzerland', group: 'A'},
		         {country: 'England', group: 'B'},
		         {country: 'Russia', group: 'B'},
                 {country: 'Slovakia', group: 'B'},
                 {country: 'Wales', group: 'B'},
                 {country: 'Germany', group: 'C'}];
}