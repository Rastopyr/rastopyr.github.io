/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rastopyr-github',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src':  "'self' http://localhost:49152/ ws://localhost:49152/ apis.google.com",
      'font-src':    "'self'",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' ws://localhost:49152/ http://rastopyr.github.io wss://*.firebaseio.com https://*.googleapis.com",
      'img-src':     "'self' ws://localhost:49152/",
      'style-src':   "'self'",
      'media-src':   "'self'",
      'report-uri': ['/csp-report'],
    },

    firebase: {
      apiKey: 'AIzaSyBYmklj7TxhQt4qGNe8C4Dv_sYcaDHB9mo',
      authDomain: 'rastopyr-github-io.firebaseapp.com',
      databaseURL: 'https://rastopyr-github-io.firebaseio.com',
      storageBucket: 'rastopyr-github-io.appspot.com',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseUrl = '/rastopyr-github/';

  }

  return ENV;
};
