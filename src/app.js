export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Search';
    config.map([
      { route: ['', 'search'], name: 'search',      moduleId: 'search', nav: true, title: 'Search' },
      { route: ['filter'], name: 'filter',      moduleId: 'filter', nav: true, title: 'Filter' },
    ]);

    this.router = router;
  }
}
