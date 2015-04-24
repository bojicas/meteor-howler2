Package.describe({
  name: 'bojicas:howler2',
  version: '2.0.0_3',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for Howler audio library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bojicas/meteor-howler2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.add_files('vendor/src/howler.core.js', 'client');
  api.add_files('vendor/src/plugins/howler.effects.js', 'client');
  api.addFiles('export.js', 'client');
  if (api.export) {
    api.export(['Howl'], ['client']);
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:howler2');
  api.addFiles('howler2-tests.js');
});
