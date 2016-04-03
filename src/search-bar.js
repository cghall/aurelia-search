import { bindable} from 'aurelia-framework';


export class SearchBar {
  heading = 'Welcome to the Aurelia Search App';
  @bindable() filterText = '';
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}