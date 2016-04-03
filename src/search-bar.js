export class SearchBar {
  heading = 'Welcome to the Aurelia Search App';
  filterText = '';
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}