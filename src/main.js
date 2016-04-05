var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
