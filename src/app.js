export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Search';
    config.map([
      { route: ['', 'search'], name: 'search',      moduleId: 'search',      nav: true, title: 'Search' }
    ]);

    this.router = router;
  }
}
