Package.describe({
  name: 'puresick:howler2',
  version: '2.0.4',
  // Brief, one-line summary of the package.
  summary: 'Fork of bojicas:howler2 Meteor package for Howler audio library supporting master branch',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/puresick/meteor-howler2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'before.js',
    'vendor/github.com/goldfire/howler.js/src/howler.core.js',
    'after.js'
  ], 'client');

  api.export('Howler');
  api.export('Howl');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:howler2');
  api.addFiles('howler2-tests.js');
});
